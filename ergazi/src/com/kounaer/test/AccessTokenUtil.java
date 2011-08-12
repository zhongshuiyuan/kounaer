package com.kounaer.test;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;

import weibo4j.Comment;
import weibo4j.Status;
import weibo4j.Weibo;
import weibo4j.WeiboException;
import weibo4j.http.AccessToken;
import weibo4j.http.RequestToken;
import weibo4j.util.BareBonesBrowserLaunch;

public class AccessTokenUtil {

	private Weibo weibo;

	public AccessTokenUtil() {
		System.setProperty("weibo4j.oauth.consumerKey", Weibo.CONSUMER_KEY);
		System.setProperty("weibo4j.oauth.consumerSecret", Weibo.CONSUMER_SECRET);
		weibo = new Weibo();
		weibo.setToken(this.getAccessToken());
	}

	public AccessToken getAccessToken() {	
		return new AccessToken("7849fb7eb805f71ce2ed67710c01a39f", "aeb626889247fb3d3f0509296bfa2e86");
	}

	public AccessToken getAccessTokenForSina() throws Exception {
		RequestToken requestToken = weibo.getOAuthRequestToken();
		System.out.println("Got request token.");
		System.out.println("Request token: " + requestToken.getToken());
		System.out.println("Request token secret: " + requestToken.getTokenSecret());
		AccessToken accessToken = null;
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		while (null == accessToken) {
			System.out.println("Open the following URL and grant access to your account:");
			System.out.println(requestToken.getAuthorizationURL());
			BareBonesBrowserLaunch.openURL(requestToken.getAuthorizationURL());
			System.out.print("Hit enter when it's done.[Enter]:");
			String pin = br.readLine();
			System.out.println("pin: " + br.toString());
			try {
				accessToken = requestToken.getAccessToken(pin);
				System.out.print("AccessToken:" + accessToken.getToken());
				System.out.print("AccessTokenSecret:" + accessToken.getTokenSecret());
			} catch (WeiboException te) {
				if (401 == te.getStatusCode()) {
					System.out.println("Unable to get the access token.");
				} else {
					te.printStackTrace();
				}
			}
		}
		return accessToken;
	}

	/**
	 * 发表微薄
	 * 
	 * @param access
	 * @param content
	 */
	public void update(String content) {
		try {
			Status status = weibo.updateStatus(content);
			System.out.println("成功发表微博：" + status.getText() + ".");
		} catch (WeiboException e) {
			System.out.println("发表微博发生异常！");
			e.printStackTrace();
		}
	}

	/**
	 * 获取前20条最新更新的公共微博
	 * 
	 * @throws WeiboException
	 */
	public void showPublicLine() throws WeiboException {
		List<Status> statuses = this.getPublicTimeLine();
		for (Status status : statuses) {
			System.out.println(status.getUser().getName() + ":" + status.getText());
		}
	}

	public List<Status> getPublicTimeLine() throws WeiboException {
		return weibo.getPublicTimeline();
	}

	public void updateComment() throws WeiboException {
		Comment comment = weibo.updateComment("必须是", "15909028227", null);
		System.out.println(comment.getId() + " : " + comment.getText() + "  " + comment.getCreatedAt());
	}
}
