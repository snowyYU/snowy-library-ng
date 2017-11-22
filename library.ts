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

	/**
	 * name:深复制的方法
	 * description:
	 * others:
	 * @param  {Object}
	 * @return {any}
	 */
	cloneObj(obj:Object):any{
	    let str, newobj = obj.constructor === Array ? [] : {};
	    if(typeof obj !== 'object'){
	        return;
	    } else if(JSON){
	        str = JSON.stringify(obj), //系列化对象
	        newobj = JSON.parse(str); //还原
	    } else {
	        for(let i in obj){
	            newobj[i] = typeof obj[i] === 'object' ? 
	            this.cloneObj(obj[i]) : obj[i]; 
	        }
	    }
	    return newobj;
	};


	/**
	 * name:将数组转化为键值对的方法
	 * description:
	 * others:
	 * @param {any[]}
	 * @param {string}
	 */
	changeToKeyValue(arr:any[],key:string){
		let keyValueObj={}
		if (arr instanceof Array) {
			for(let item of arr){
				keyValueObj[item.key]=item
			}
			return keyValueObj
		}else{
			return
		}
	}


}