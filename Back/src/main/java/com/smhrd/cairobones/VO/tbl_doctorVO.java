package com.smhrd.cairobones.VO;

import com.smhrd.cairobones.CairobonesApplication;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class tbl_doctorVO {
    private String doctor_id;
    private String doctor_pw;
    private String doctor_name;
    private String doctor_license;
    private String license_date;
    private String doctor_joindate;
}
