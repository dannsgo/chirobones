package com.smhrd.cairobones;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
public class CairobonesApplication {

    public static void main(String[] args) {
        SpringApplication.run(CairobonesApplication.class, args);
    }

}

// 3.11 변경사항
// RestController
//      1. Autowired 삭제 @RequiredArgsConstructor 추가
//      2. @CrossOrigin(origins = "https//localhost:3000")
//      3. mapper.java 주석 추가
