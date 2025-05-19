(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mapTest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new GoogleMap("GoogleMap00","50","35","730","465",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("mapTest.xfdl", function() {
        this.GoogleMap00_onload = function(obj,e)
        {

        };

        this.mapTest_onload = function(obj,e)
        {
        		this.GoogleMap00.load(false, 11.96832946, 121.922996308, 0, 12);
        //    this.GoogleMap00.set_apikey(nexacro.getApplication().googleMapAPIKey);
            this.GoogleMap00.set_showzoom(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.mapTest_onload,this);
            this.GoogleMap00.addEventHandler("onload",this.GoogleMap00_onload,this);
        };
        this.loadIncludeScript("mapTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
