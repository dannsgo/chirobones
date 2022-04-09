package com.smhrd.cairobones.VO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class tbl_patientVO {
    private int p_seq;
    private String doctor_id;
    private String p_code;
    private String p_name;
    private String p_birthdate;
    private String p_xray;
    private String p_stored_xray;
    private String p_xraypath;
    private String p_diagnosis;
    private String p_prescription;
    private String p_registdate;
    private String p_diagnosisdate;
    private String p_gender;
    private String p_hospital;
}
