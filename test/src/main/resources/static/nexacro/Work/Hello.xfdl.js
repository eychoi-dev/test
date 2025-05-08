(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Hello");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("BOARD_GRID", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">LKICT</Col><Col id=\"SORT_ORD\">1</Col><Col id=\"USE_YN\">Y</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"USE_YN\">Y</Col><Col id=\"SORT_ORD\">2</Col><Col id=\"CD_NM\">경영관리팀</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"USE_YN\">Y</Col><Col id=\"SORT_ORD\">3</Col><Col id=\"CD_NM\">BIZ사업본부</Col><Col id=\"CD\">03</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"USE_YN\">N</Col><Col id=\"SORT_ORD\">4</Col><Col id=\"CD_NM\">디자인팀</Col><Col id=\"CD\">04</Col><Col id=\"CHK\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DEPT_CD", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"CODE_NM\">개발팀</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"CODE_NM\">기획팀</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"CODE_NM\">디자인팀</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DEL_YN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">삭제</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","22","10","256","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("nexacro test");
            obj.set_font("bold 16px/normal \"Malgun Gothic\"");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("searchDiv","17","39","1253","71",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid black");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Label_deptCd","32","17","56","35",null,null,null,null,null,null,this.searchDiv.form);
            obj.set_taborder("0");
            obj.set_text("DEPT_CD");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Combo("cb_deptCd","112","17","268","36",null,null,null,null,null,null,this.searchDiv.form);
            obj.set_taborder("1");
            obj.set_innerdataset("DEPT_CD");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo00");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Static("Label_empCd","432","17","56","35",null,null,null,null,null,null,this.searchDiv.form);
            obj.set_taborder("2");
            obj.set_text("EMP_CD");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.searchDiv.addChild(obj.name, obj);

            obj = new TextArea("txt_empCd","508","17","268","36",null,null,null,null,null,null,this.searchDiv.form);
            obj.set_taborder("3");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Static("Label_delYn","862","17","56","35",null,null,null,null,null,null,this.searchDiv.form);
            obj.set_taborder("4");
            obj.set_text("DEL_YN");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Radio("Radio_delYn","951","22","171","25",null,null,null,null,null,null,this.searchDiv.form);
            obj.set_taborder("5");
            obj.set_columncount("2");
            obj.set_rowcount("1");
            obj.set_innerdataset("DEL_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CD_NM");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("DEL_YN");
            obj.set_index("-1");
            this.searchDiv.addChild(obj.name, obj);

            obj = new CheckBox("chk_chkYn","1141","22","103","25",null,null,null,null,null,null,this.searchDiv.form);
            obj.set_taborder("6");
            obj.set_text("CHK_YN");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Grid("grid_dept","22","116","778","584",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autosizingtype("col");
            obj.set_autofittype("col");
            obj.set_binddataset("BOARD_GRID");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CD\"/><Cell col=\"1\" text=\"CD_NM\"/><Cell col=\"2\" text=\"SORT_ORD\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"CHK\"/></Band><Band id=\"body\"><Cell text=\"bind:CD\"/><Cell col=\"1\" text=\"bind:CD_NM\"/><Cell col=\"2\" text=\"bind:SORT_ORD\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","810","116","460","594",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow","910","8","86","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addDataRow","1030","8","97","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("데이터 행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow","1159","9","97","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","720","8","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.searchDiv.form
            obj = new Layout("default","",0,0,this.searchDiv.form,function(p){});
            this.searchDiv.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Hello.xfdl", function() {
        /*********************************************************/
        /* 프로그램 : C:\NP250401\Work\Hello.xfdl
        /* 작성일자 : 2025/04/02
        /* 작 성 자 : eychoi
        /* 설    명 : 넥사크로 공부
        /*********************************************************/
        //nexacro.getApplication().trace("")  =  로그 출력

        // 공백 행 추가 버튼
        this.btn_addRow_onclick = function(obj,e)
        {
        	// 마지막 행 아래에 행 추가
        	this.BOARD_GRID.addRow();
        };

        // 데이터 행 추가 버튼
        this.btn_addDataRow_onclick = function(obj,e)
        {
        	nexacro.getApplication().trace("데이터 행 추가");
        	// 마지막 행 아래에 행 추가
        	var nRow = this.BOARD_GRID.addRow();
        	//USE_YN 기본 값 설정 = 'Y'
        	this.BOARD_GRID.setColumn(nRow, "USE_YN", "Y");
        };

        // 행 삭제 버튼
        this.btn_delRow_onclick = function(obj,e)
        {
        	// 선택된 행 삭제
        	this.BOARD_GRID.deleteRow(this.BOARD_GRID.rowposition);
        };

        // 그리드 헤더 클릭 이벤트
        this.grid_dept_onheadclick = function(obj,e)
        {
        	var chkVal = obj.getCellProperty("head", 0, "text");

        	//체크되어있던 경우 체크해제
        	if(chkVal == "1") {
        		chkVal = "0";
        		obj.setCellProperty("head", 0, "text", chkVal);
        		for(var i=0; i<this.BOARD_GRID.rowcount; i++) {
        			this.BOARD_GRID.setColumn(i, "CHK", "0");
        		}
        	}else{//체크 안 된 상태였을 경우 체크
        		chkVal = "1";
        		obj.setCellProperty("head", 0, "text", chkVal);
        		for(var i=0; i<this.BOARD_GRID.rowcount; i++) {
        			this.BOARD_GRID.setColumn(i, "CHK", "1");
        		}
        	}
        };

        //그리드 셀 클릭 이벤트
        this.grid_dept_oncellclick = function(obj,e)
        {
        	//전체 체크 중 하나만 체크가 해제되도 헤더 체크박스 해제
        	var chkCount = obj.getCellProperty("body", 0, "text");
        	nexacro.getApplication().trace("chkCount : " + chkCount);

        	var rowCount = this.BOARD_GRID.rowcount;
        	nexacro.getApplication().trace("rowCount : " + rowCount);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.BOARD_GRID.clear();

        	this.transaction(
        		"test",      // 서비스 ID (문자열)
        		"http://localhost:1122/nexacro/hello",        // 요청 보낼 서버 주소
        		"",     // 입력 Dataset 매핑 (서버로 보낼 데이터)
        		"BOARD_GRID=out_ds",    // 출력 Dataset 매핑 (서버에서 받을 데이터)
        		"",       // 추가 파라미터 (필요 없으면 "")
        		"fnCallback"  // 콜백 함수 이름 (문자열)
        	);
        };

        this.fnCallback = function(svcID, errCode, errMsg)
        {
            if (errCode < 0) {
                alert("에러 발생: " + errMsg);
                return;
            }

            if (svcID == "test") {
                trace("행 수: " + this.BOARD_GRID.getRowCount());
        		trace("데이터: " + this.BOARD_GRID.saveXML());
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.searchDiv.form.Radio_delYn.addEventHandler("onitemchanged",this.Div00_Radio00_onitemchanged,this);
            this.grid_dept.addEventHandler("onheadclick",this.grid_dept_onheadclick,this);
            this.grid_dept.addEventHandler("oncellclick",this.grid_dept_oncellclick,this);
            this.btn_addRow.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.btn_addDataRow.addEventHandler("onclick",this.btn_addDataRow_onclick,this);
            this.btn_delRow.addEventHandler("onclick",this.btn_delRow_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Hello.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
