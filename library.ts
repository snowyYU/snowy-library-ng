import { Injectable } from '@angular/core'
@Injectable()
export class LibraryService{
	//函数库



	
	
	
	
	/**
	 * name:生成随机不重复值的方法
	 * description:常用于构造键值对，为数组等结构附上唯一值
	 * others:
	 * @param  {any[]}
	 * @return {any}
	 */
	createUniqueId(arr:any[]):any{
		let index=Math.floor(Math.random()*arr.length);
		return arr.splice(index,1)[0]
	}

}