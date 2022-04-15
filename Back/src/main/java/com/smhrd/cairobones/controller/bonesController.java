package com.smhrd.cairobones.controller;

import com.smhrd.cairobones.VO.tbl_bulletinVO;
import com.smhrd.cairobones.VO.tbl_commentVO;
import com.smhrd.cairobones.VO.tbl_doctorVO;
import com.smhrd.cairobones.VO.tbl_patientVO;
import com.smhrd.cairobones.service.bonesService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class bonesController {

    private bonesService service;

    @RequestMapping("/join")
    private String doJoin() {
        return "/cairobones/join";
    }

    @RequestMapping(value = "/doJoin", method = {RequestMethod.POST})
    private String bonesJoin(tbl_doctorVO tbl_doctor) {
        service.bonesJoin(tbl_doctor);
        return "/cairobones/login";
    }

    @RequestMapping("/login")
    private String doLogin() {
        return "/cairobones/login";
    }

    @RequestMapping(value = "/doLogin", method = {RequestMethod.POST})
    private String bonesLogin(tbl_doctorVO tbl_doctor, HttpSession session) {
        tbl_doctorVO doctorVo = service.bonesLogin(tbl_doctor);
        if (doctorVo != null) {
            session.setAttribute("doctor_id", tbl_doctor.getDoctor_id());
        }
        return "/cairobones/insert";
    }

    // 티스토리 블로그

    @RequestMapping("/fileUpload")
    private RedirectView fileUpload(@ModelAttribute tbl_patientVO tbl_patient, @RequestPart MultipartFile file,
                                    HttpServletRequest request) throws IllegalStateException, IOException, Exception{

        if(file.isEmpty()){
            service.fileUpload(tbl_patient);
        }else{
            // 사용자 컴퓨터에 저장된 파일명
            String fileName = file.getOriginalFilename();
            // 확장자
            String fileNameExtension = FilenameUtils.getExtension(fileName).toLowerCase();
            // DB에 저장할 파일 고유명
            File destinationFile;
            String destinationFileName;
            // 절대경로 설정 (설정하지 않으면 마음대로 들어감)
            String fileUrl = "C:\\Users\\cairobones\\xray\\";

            do{
                //고유명 생성
                destinationFileName = RandomStringUtils.randomAlphanumeric(32) + "." + fileNameExtension;
                destinationFile = new File(fileUrl + destinationFileName);
            }while(destinationFile.exists());

            destinationFile.getParentFile().mkdirs();
            file.transferTo(destinationFile);

            tbl_patient.setP_xraypath(destinationFileName);
            tbl_patient.setP_xray(fileName);
            //tbl_patient.setP_xraypath(fileUrl);
            service.fileUpload(tbl_patient);
        }

        return new RedirectView("cairobones/list");
    }

    @RequestMapping("/list")
    private String patientList(Model model, HttpServletRequest request){
        List<tbl_patientVO> patientList = new ArrayList<>();
        patientList = service.getPatientList();
        model.addAttribute("patientList", patientList);
        return "cairobones/list";
    }

    @RequestMapping("/detail/{p_seq}")
    private String detail(@PathVariable("p_seq") int p_seq, Model model){
        model.addAttribute("detail", service.detail(p_seq));
        // 경로 + 저장된 이름 보내주면 <img src = {} >
        return "cairobones/detail";
    }

    @GetMapping("/loadFile")
    public ResponseEntity<Resource> loadFile(@RequestParam String p_xraypath){
        System.out.println(p_xraypath);
        String path = "C:\\Users\\cairobones\\xray\\";
        String folder = "";
        Resource resource = new FileSystemResource(path + folder + p_xraypath);
        if(!resource.exists()) {
            return new ResponseEntity<Resource>(HttpStatus.NOT_FOUND);
        }
        HttpHeaders header = new HttpHeaders();
        Path filePath = null;
        try{
            filePath = Paths.get(path + p_xraypath);
            header.add("Content-type", Files.probeContentType(filePath));
        }catch(IOException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<Resource>(resource, header, HttpStatus.OK);

    }


    /*게시판*/

    @RequestMapping("/getBulletin")
    private String getBulletin(Model model, HttpServletRequest request){
        List<tbl_bulletinVO> bulletinList = new ArrayList<>();
        bulletinList = service.getBulletin();
        model.addAttribute("getBulletin", bulletinList);
        return "cairobones/bulletinBoard";
    }

    @RequestMapping("/bulletinDetail/{article_seq}")
    private String bulletinDetail(@PathVariable("article_seq") int article_seq, Model model){
        model.addAttribute("detail", service.bulletinDetail(article_seq));
        return "/cairobones/bulletinDetail";
    }

    @RequestMapping("/goBulletinWrite")
    private String goBulletinWrite(){
        return "/cairobones/bulletinWrite";
    }

    @RequestMapping("/bulletinWrite")
    private RedirectView bulletinWrite(@ModelAttribute tbl_bulletinVO bulletinVO, HttpServletRequest request) {
        service.bulletinWrite(bulletinVO);
        return new RedirectView("/getBulletin");
    }

    @RequestMapping("/goBulletinUpdate/{article_seq}")
    private String goBulletinUpdate(@PathVariable("article_seq") int article_seq, Model model){
        model.addAttribute("detail", service.bulletinDetail(article_seq));
        return "/cairobones/bulletinUpdate";
    }

    @RequestMapping("/bulletinUpdate/{article_seq}")
    private RedirectView bulletinUpdate(@ModelAttribute tbl_bulletinVO bulletinVO){
        service.bulletinUpdate(bulletinVO);
        int articleSeq = bulletinVO.getArticle_seq();
        String article_seq = Integer.toString(articleSeq);
        return new RedirectView("/bulletinDetail/"+article_seq);
    }

    @RequestMapping("/bulletinDelete/{article_seq}")
    private RedirectView bulletinDelete(@PathVariable("article_seq") int article_seq){
        service.bulletinDelete(article_seq);
        return new RedirectView("/getBulletin");
    }

    @RequestMapping("/commentWrite")
    @ResponseBody
    private RedirectView commentWrite(@RequestParam int article_seq, @RequestParam String comment_content,
                                      @RequestParam String doctor_id){
        tbl_commentVO commentVO = new tbl_commentVO();
        commentVO.setComment_content(comment_content);
        commentVO.setArticle_seq(article_seq);
        commentVO.setDoctor_id(doctor_id);
        service.commentWrite(commentVO);
        return new RedirectView("/bulletinDetail/"+article_seq);
    }

    @RequestMapping("/commentUpdate/{comment_seq}")
    private RedirectView commentUpdate(@PathVariable("comment_content") String comment_content,
                                       @RequestParam int article_seq){
        tbl_commentVO commentVO = new tbl_commentVO();
        commentVO.setComment_content(comment_content);
        service.commentUpdate(commentVO);
        return new RedirectView("/bulletinDetail/"+article_seq);
    }

    @RequestMapping("/commentDelete/{comment_seq}")
    private RedirectView commentDelete(@PathVariable("comment_seq") int comment_seq, @RequestParam int article_seq){
        service.commentDelete(comment_seq);
        return new RedirectView("/bulletinDetail/"+article_seq);
    }

}
