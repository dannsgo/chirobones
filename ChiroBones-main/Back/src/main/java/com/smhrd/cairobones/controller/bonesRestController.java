package com.smhrd.cairobones.controller;

import com.mysql.cj.xdevapi.JsonArray;
import com.mysql.cj.xdevapi.JsonString;
import com.smhrd.cairobones.VO.tbl_bulletinVO;
import com.smhrd.cairobones.VO.tbl_commentVO;
import com.smhrd.cairobones.VO.tbl_patientVO;
import com.smhrd.cairobones.service.bonesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequiredArgsConstructor
//@CrossOrigin(origins = "https//localhost:3000")
public class bonesRestController {

    private final bonesService service;

    @PostMapping("/getCommentList/{article_seq}")
    public List<tbl_commentVO> commentList(@PathVariable int article_seq){
        List<tbl_commentVO> commentList = service.getCommentList(article_seq);
        return commentList;
    }

    @PostMapping("hello")
    public String phm_list(){
        //List<tbl_bulletinVO> phm_list = service.getBulletin();
        return "hello1111";
    }
    @GetMapping("hello2")
    public List<tbl_bulletinVO> phm_list2(){
        List<tbl_bulletinVO> phm_list2 = service.getBulletin();
        System.out.print(phm_list2);
        return phm_list2;
    }
    @GetMapping("/user")
    public void phm(@RequestParam String id){
       // System.out.print(id);
    }
    @PostMapping("/user2")
    public void phm2(@RequestBody tbl_bulletinVO a){
        System.out.print(a.getArticle_seq());
    }

    // ==================실제 데이터 전송================================================================================================================
    // 환자 정보
    @PostMapping("patient")
    public List<tbl_patientVO> patinet(){
        List<tbl_patientVO> patient_info = service.getPatientList();
        // System.out.print(patient_info);
        return patient_info;
    }

    @RequestMapping("http://172.30.1.46:8080/fileUpload")
    public void points(@RequestParam String res){
        System.out.print(res);
    }



}

//List<tbl_bulletinVO> getBulletin();