(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacroTest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_codeGrp", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DESC1\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DESC2\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DESC3\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DESC4\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DESC5\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DESC6\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("masterGrid","2","50","488","560",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_codeGrp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"GRP_CD\"/><Cell col=\"2\" text=\"GRP_CD_NM\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"SUB_DESC1\"/><Cell col=\"5\" text=\"SUB_DESC2\"/><Cell col=\"6\" text=\"SUB_DESC3\"/><Cell col=\"7\" text=\"SUB_DESC4\"/><Cell col=\"8\" text=\"SUB_DESC5\"/><Cell col=\"9\" text=\"SUB_DESC6\"/><Cell col=\"10\" text=\"RMK\"/><Cell col=\"11\" text=\"REG_ID\"/><Cell col=\"12\" text=\"REG_DTM\"/><Cell col=\"13\" text=\"UPD_ID\"/><Cell col=\"14\" text=\"UPD_DTM\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:GRP_CD\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:GRP_CD_NM\"/><Cell col=\"3\" text=\"bind:USE_YN\" displaytype=\"checkboxcontrol\" edittype=\"none\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/><Cell col=\"4\" text=\"bind:SUB_DESC1\"/><Cell col=\"5\" text=\"bind:SUB_DESC2\"/><Cell col=\"6\" text=\"bind:SUB_DESC3\"/><Cell col=\"7\" text=\"bind:SUB_DESC4\"/><Cell col=\"8\" text=\"bind:SUB_DESC5\"/><Cell col=\"9\" text=\"bind:SUB_DESC6\"/><Cell col=\"10\" text=\"bind:RMK\"/><Cell col=\"11\" text=\"bind:REG_ID\"/><Cell col=\"12\" text=\"bind:REG_DTM\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"13\" text=\"bind:UPD_ID\"/><Cell col=\"14\" text=\"bind:UPD_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","660","5","70","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","740","5","70","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow","820","5","70","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","904","5","70","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,620,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nexacroTest.xfdl", function() {
        /************************************************************************
         * form onLoad
         ************************************************************************/
        this.nexacroTest_onload = function(obj, e)
        {
        	//데이터셋 행 추가 및 행 포지션 변경 시 실행되는 이벤트
        	this.ds_codeGrp.addEventHandler("onrowposchanged", this.ds_codeGrp_onrowposchanged, this);
        }

        /************************************************************************
         * Button click Event
         ************************************************************************/
         // 조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_codeGrp.clear();

        	this.transaction(
        		"codeGrpSearch",      // 서비스 ID (문자열)
        		"http://localhost:1122/nexacro/getCodeGrpList",        // 요청 보낼 서버 주소
        		"",     // 입력 Dataset 매핑 (서버로 보낼 데이터)
        		"ds_codeGrp=out_ds",    // 출력 Dataset 매핑 (서버에서 받을 데이터)
        		"",       // 추가 파라미터 (필요 없으면 "")
        		"fnCallback"  // 콜백 함수 이름 (문자열)
        	);
        };
        // 행추가
        this.btn_addRow_onclick = function(obj,e)
        {
        	// 마지막 행 아래에 행 추가
        	var nRow = this.ds_codeGrp.addRow();
        	//dataSet 사용여부 초기화
        	this.ds_codeGrp.setColumn(nRow, "USE_YN", "Y"); //사용여부 default : Y
        };
        //저장
        this.btn_save_onclick = function(obj,e)
        {
        	this.transaction(
        		"codeGrpSave",      // 서비스 ID (문자열)
        		"http://localhost:1122/nexacro/saveCodeGrpList",        // 요청 보낼 서버 주소
        		"in_ds=ds_codeGrp:U",     // 입력 Dataset 매핑 (서버로 보낼 데이터) : 갱신된 정보만 서버로 전달
        		"",    // 출력 Dataset 매핑 (서버에서 받을 데이터)
        		"",       // 추가 파라미터 (필요 없으면 "")
        		"fnCallback",  // 콜백 함수 이름 (문자열)
         		true,	//async 여부
         		3,		//데이터 형태 JSON형식
         		false	//트랜잭션시 데이터 압축 여부
        	);
        };
        //행삭제
        this.btn_delete_onclick = function(obj,e)
        {

        };

        /************************************************************************
         * grid Event
         ************************************************************************/
        this.masterGrid_oncellclick = function(obj,e)
        {
        	var rowType = this.ds_codeGrp.getRowType(e.row);
        	if(rowType == 2){//추가된 행
        		if(e.cell < 11) { //GRP_CD ~ RMK 수정가능
        			obj.setCellProperty("body", e.cell, "edittype", "text");
        		}else{ //REG_ID ~ UPD_DTM 수정 불가
        			obj.setCellProperty("body", e.cell, "edittype", "none");
        		}
        	}else{
        		if(e.cell == 3) {//USE_YN 수정가능
        			obj.setCellProperty("body", e.cell, "edittype", "checkbox");
        		}
        	}
        };

        /************************************************************************
         * DataSet Event
         ************************************************************************/
        this.ds_codeGrp_onrowposchanged = function(obj, e)
        {
            //row type
        	var rowType = obj.getRowType(e.newrow);
        	if(rowType == 2) {//추가된 행
        		trace("addRow : ", e.newrow);
        	}
        }

        /************************************************************************
         * transaction callback
         ************************************************************************/
        this.fnCallback = function(svcID, errCode, errMsg)
        {
        	if(svcID == "codeGrpSearch") {
        	}else if(svcID == "codeGrpSave") {
        		this.btn_search_onclick();
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.nexacroTest_onload,this);
            this.masterGrid.addEventHandler("oncellclick",this.masterGrid_oncellclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_addRow.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
        };
        this.loadIncludeScript("nexacroTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
