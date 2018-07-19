(function(w){
	var String=w.String, Proto=String.prototype;

	(function(o,p){
		if(p in o?o[p]?false:true:true){
			var r=/^\s+/;
			o[p]=o.trimLeft||function(){
				return this.replace(r,'')
			}
		}
	})(Proto,'trimStart');

})(window);
