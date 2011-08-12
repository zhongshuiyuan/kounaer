/*
Copyright (c) 2007-2009
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the Yusuke Yamamoto nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY Yusuke Yamamoto ``AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL Yusuke Yamamoto BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
package weibo4j;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import weibo4j.http.PostParameter;


/**
 * 
 * @author SinaWeibo
 *
 */
public class Query {
    private String q;
    private int rpp=20;
    private Boolean sdomain=null;//
    private Boolean sintro=null;//
    private Integer province=null;//
    private Integer city	=null;//
    private Gender gender=null;//
    private String comorsch=null;
    private int sort=1;//
    private Integer page=null;
    private Integer count=null;//
    private int filter_ori=0;//
    
    public void setQ(String q) {
		this.q = q;
//		if(!URLEncodeUtils.isURLEncoded(q))
//		q=URLEncodeUtils.encodeURL(q);
	}
	public String getQ() {
		return q;
	}
	public int getRpp() {
		return rpp;
	}
	public void setRpp(int rpp) {
		this.rpp = rpp;
	}
	public Boolean getSdomain() {
		return sdomain;
	}
	public void setSdomain(Boolean sdomain) {
		this.sdomain = sdomain;
	}
	public Boolean getSintro() {
		return sintro;
	}
	public void setSintro(Boolean sintro) {
		this.sintro = sintro;
	}
	public Integer getProvince() {
		return province;
	}
	public void setProvince(Integer province) {
		this.province = province;
	}
	public Integer getCity() {
		return city;
	}
	public void setCity(Integer city) {
		this.city = city;
	}
	public Gender getGender() {
		return gender;
	}
	public void setGender(Gender gender) {
		this.gender = gender;
	}
	public String getComorsch() {
		return comorsch;
	}
	public void setComorsch(String comorsch) {
		this.comorsch = comorsch;
	}
	public int getSort() {
		return sort;
	}
	public void setSort(int sort) {
		this.sort = sort;
	}
	public Integer getPage() {
		return page;
	}
	public void setPage(Integer page) {
		this.page = page;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	public int getFilter_ori() {
		return filter_ori;
	}
	public void setFilter_ori(int filterOri) {
		filter_ori = filterOri;
	}
	public PostParameter[] getParameters() throws WeiboException{
		List<PostParameter> list= new ArrayList<PostParameter>();
		Class<Query> clz=Query.class;
		Field[] fields=clz.getDeclaredFields();
		for (Field field : fields) {
			field.setAccessible(true);
			String fieldName=field.getName();
			String firstLetter = fieldName.substring(0, 1).toUpperCase();
			String getMethodName = "get" + firstLetter+ fieldName.substring(1); 
			Method getMethod;
			try {
				getMethod = clz.getMethod(getMethodName, new Class[] {});
				Object value = getMethod.invoke(this, new Object[] {}); 
				if(value!=null){
					list.add(getParameterValue(fieldName, value));
				}
			} catch (Exception e) {
				throw new WeiboException(e);
			}
		}
		return list.toArray(new PostParameter[list.size()]);
		
	}
	private PostParameter getParameterValue(String name,Object value){
		if(value instanceof Boolean){
			return new PostParameter(name, (Boolean)value?"0":"1");
		}else if(value instanceof String){
			return new PostParameter(name, value.toString());
		}else if(value instanceof Integer){
			return new PostParameter(name,Integer.toString((Integer)value));
		}else if(value instanceof Gender) {
			return new PostParameter(name,Gender.valueOf((Gender)value));
		}
		return null;
	}
	
}


