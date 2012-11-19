package com.kounaer.servlet;

import java.math.BigDecimal;
import java.net.HttpURLConnection;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.PostMethod;

import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;

public class SendHttpReauest {

	private HttpURLConnection url_con;
	private HttpClient httpClient = new HttpClient();

	private final int soTimeOut = 5000; // 读取数据超时

	public String getOffsetLatLngBaidu(double lat, double lng, int accuracy) {
		String url = "http://api.map.baidu.com/ag/coord/convert?from=0&to=4&x="
				+ lng + "&y=" + lat;
		PostMethod postMethod = new PostMethod(url);
		postMethod.getParams().setSoTimeout(soTimeOut);
		postMethod.getParams().setParameter("http.protocol.cookie-policy",
				org.apache.commons.httpclient.cookie.CookiePolicy.BROWSER_COMPATIBILITY);
		int statusCode = 0;
		try {
			statusCode = httpClient.executeMethod(postMethod);
			if (statusCode == 200) {
				String sTotalString = new String(postMethod.getResponseBody(),
						"GBK");
				sTotalString = sTotalString.substring(1,
						sTotalString.length() - 1);
				String[] results = sTotalString.split("\\,");
				if (results.length == 3) {
					if (results[0].split("\\:")[1].equals("0")) {
						String mapX = results[1].split("\\:")[1];
						String mapY = results[2].split("\\:")[1];
						mapX = mapX.substring(1, mapX.length() - 1);
						mapY = mapY.substring(1, mapY.length() - 1);
						mapX = new String(Base64.decode(mapX));
						mapY = new String(Base64.decode(mapY));
						return String.valueOf(new BigDecimal(Double
								.valueOf(mapX)).setScale(accuracy,
								BigDecimal.ROUND_HALF_UP).doubleValue())
								+ ","
								+ String.valueOf(new BigDecimal(Double
										.valueOf(mapY)).setScale(accuracy,
										BigDecimal.ROUND_HALF_UP).doubleValue());
					}
				}
			}
		} catch (Exception e) {
		} finally {
			if (url_con != null)
				url_con.disconnect();
		}
		return "error";
	}

	public String getOffsetLatLngGoogle(double lat, double lng, int accuracy) {
		String url = "http://aaa2011.a151.xunbiz.net/gps2mar.aspx?id=429646&lng="
				+ lng + "&lat=" + lat;
		PostMethod postMethod = new PostMethod(url);
		postMethod.getParams().setSoTimeout(soTimeOut);
		postMethod.getParams().setParameter("http.protocol.cookie-policy",
				org.apache.commons.httpclient.cookie.CookiePolicy.BROWSER_COMPATIBILITY);
		int statusCode = 0;
		try {
			statusCode = httpClient.executeMethod(postMethod);
			if (statusCode == 200) {
				String sTotalString = new String(postMethod.getResponseBody(),
						"UTF-8");
				String[] ss = sTotalString.split(",");
				return ss[1] + "," + ss[0];
			}
		} catch (Exception e) {
		} finally {
			if (url_con != null)
				url_con.disconnect();
		}
		return "error";
	}


	public static void main(String[] args) throws Exception {
		SendHttpReauest sr = new SendHttpReauest();
		System.out.println(sr.getOffsetLatLngBaidu(39.917,116.397, 3));
	}
}
