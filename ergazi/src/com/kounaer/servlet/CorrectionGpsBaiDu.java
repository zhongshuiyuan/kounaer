package com.kounaer.servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLDecoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;

public class CorrectionGpsBaiDu extends HttpServlet {

	private static final long serialVersionUID = -4591549663445444452L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.setContentType("text/xml; charset=UTF-8");
		String lat = URLDecoder.decode((String) req.getParameter("lat"),
				"utf-8");
		String lng = URLDecoder.decode((String) req.getParameter("lng"),
				"utf-8");
		String uri = "http://api.map.baidu.com/ag/coord/convert?from=0&to=4&x="
				+ lng + "&y=" + lat;
		System.out.println("Redirecting to " + uri);
		URL url = new URL(uri);
		URLConnection connection = url.openConnection();
		connection.setDoOutput(true);
		OutputStreamWriter out = new OutputStreamWriter(
				connection.getOutputStream(), "utf-8");
		out.flush();
		out.close();
		String sCurrentLine;
		String sTotalString;
		sCurrentLine = "";
		sTotalString = "";
		InputStream l_urlStream;
		l_urlStream = connection.getInputStream();
		BufferedReader l_reader = new BufferedReader(new InputStreamReader(
				l_urlStream));
		while ((sCurrentLine = l_reader.readLine()) != null) {
			if (!sCurrentLine.equals(""))
				sTotalString += sCurrentLine;
		}
		System.out.println(sTotalString);
		sTotalString = sTotalString.substring(1, sTotalString.length() - 1);
		String[] results = sTotalString.split("\\,");
		if (results.length == 3) {
			if (results[0].split("\\:")[1].equals("0")) {
				String mapX = results[1].split("\\:")[1];
				String mapY = results[2].split("\\:")[1];
				mapX = mapX.substring(1, mapX.length() - 1);
				mapY = mapY.substring(1, mapY.length() - 1);
				mapX = new String(Base64.decode(mapX));
				mapY = new String(Base64.decode(mapY));
				System.out.println(mapX);
				System.out.println(mapY);
				String ss = mapX + "," + mapY;
				resp.getOutputStream().write(ss.getBytes(), 0,
						ss.getBytes().length);
			}
		}
	}

	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		doGet(req, resp);
	}

	public static void testPost(String x, String y) throws IOException {
		URL url = new URL(
				"http://api.map.baidu.com/ag/coord/convert?from=0&to=4&x=" + x
						+ "&y=" + y);
		URLConnection connection = url.openConnection();
		connection.setDoOutput(true);
		OutputStreamWriter out = new OutputStreamWriter(
				connection.getOutputStream(), "utf-8");
		// remember to clean up
		out.flush();
		out.close();
		String sCurrentLine;
		String sTotalString;
		sCurrentLine = "";
		sTotalString = "";
		InputStream l_urlStream;
		l_urlStream = connection.getInputStream();
		BufferedReader l_reader = new BufferedReader(new InputStreamReader(
				l_urlStream));
		while ((sCurrentLine = l_reader.readLine()) != null) {
			if (!sCurrentLine.equals(""))
				sTotalString += sCurrentLine;
		}
		System.out.println(sTotalString);
		sTotalString = sTotalString.substring(1, sTotalString.length() - 1);
		String[] results = sTotalString.split("\\,");
		if (results.length == 3) {
			if (results[0].split("\\:")[1].equals("0")) {
				String mapX = results[1].split("\\:")[1];
				String mapY = results[2].split("\\:")[1];
				mapX = mapX.substring(1, mapX.length() - 1);
				mapY = mapY.substring(1, mapY.length() - 1);
				mapX = new String(Base64.decode(mapX));
				mapY = new String(Base64.decode(mapY));
				System.out.println(mapX);
				System.out.println(mapY);
			}
		}
	}

	public static void main(String[] args) throws IOException {
		testPost("116.31500244140287", "40.006434917448786");
	}
}
