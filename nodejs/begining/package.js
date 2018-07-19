function modifyInsr(id, productName, functionName, producter, backstage,
                    front, tester, branch, fabusystem, codereView, ispaiqi, issql, zt) {
    console.log("df")
    var back_branch_content = "";
    var fe_branch_content = "";
    branch = branch.replace(/<br>/g," ");
    var be_index = branch.indexOf("后台分支");
    var fe_index = branch.indexOf("前端分支");
    var has_be = be_index!=-1;
    var has_fe = fe_index!=-1;

    if (has_be && has_fe){
        back_branch_content = branch.substr(be_index+5,fe_index-5);
        fe_branch_content = branch.substr(fe_index+5,branch.length);
    }else if(has_be){
        back_branch_content = branch.substr(5, branch.length);
    }else if (has_fe){
        fe_branch_content = branch.substr(5, branch.length)
    }



}
modifyInsr("\"2018060711TPRM03128552\"","12","123","123","123",
    "dfdf","dfdf","后台分支:api:f_20180528_hujunfei_couponOptimise_tta<br>bridge:f_20180528_hujunfei_couponOptimise_bridge<br>前端分支:admin-fe：f_couponPushPicture", "dfd","dfd","dfdf","dffdf","df");