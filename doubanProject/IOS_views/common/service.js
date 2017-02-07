/*
* 接口：API
* 基于豆瓣开放API的图书，电影
*
* 在这里面定义对象
* */

var BaseURL="https://api.douban.com/v2/";

var Douban_APIS={
	/*
	* 图书搜索
	* image
	* title
	* publisher
	* author
	* price
	* pages
	* */
	book_search:BaseURL+"book/search",

	/*
	*  图书详情
	*  image
	*  title
	*  publisher
	*  author
	*  price
	*  pages
	*  summary
	*  atuhor_intro
	*
	* */
	book_detail_id:BaseURL+"book/",

	/*
	* 电影搜索
	* images.medium  电影图像
	* title  电影名称
	* casts  电影演员  数据需要 再处理
	* rating.average 电影评分
	* year  上映时间
	* genres  电影标签
	* alt   电影详情url
	* */

	movie_search:BaseURL+"movie/search",

	//电影详情用  webview 显示
}

module.exports=Douban_APIS;