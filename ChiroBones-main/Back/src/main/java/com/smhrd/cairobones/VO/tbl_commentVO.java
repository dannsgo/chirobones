package com.smhrd.cairobones.VO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class tbl_commentVO {
    private int comment_seq;
    private int article_seq;
    private String comment_content;
    private String comment_date;
    private String doctor_id;
}
