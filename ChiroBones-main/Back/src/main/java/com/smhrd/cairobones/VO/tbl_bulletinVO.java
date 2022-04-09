package com.smhrd.cairobones.VO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class tbl_bulletinVO {
    private int article_seq;
    private String article_title;
    private String article_content;
    private String article_file;
    private String article_date;
    private String doctor_id;
    private int p_seq;
}
