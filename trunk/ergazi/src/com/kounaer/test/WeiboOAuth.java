package com.kounaer.test;

import weibo4j.Weibo;
import weibo4j.WeiboException;
import weibo4j.http.AccessToken;
import weibo4j.http.RequestToken;
import weibo4j.util.BareBonesBrowserLaunch;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * @author caozf
 */
public class WeiboOAuth {

    public static final String APP_KEY = "3008305956";
    public static final String APP_SECRET = "1bd8bc57cb7d664ddc541ecf9903fc1a";

    public static final String ACCESS_TOKEN = "91eb1ca323141a8b7cf6182dfe1f89eb";
    public static final String ACCESS_TOKEN_SECRET = "9213787ce6cf4f0be1aae28fb718d747";


    private String token; 
    private String tokenSecret;

    private static WeiboOAuth weiboOAuth;

    private WeiboOAuth() {
    }

    public static WeiboOAuth getInstance() {
        if (weiboOAuth == null) {
            return new WeiboOAuth();
        }
        return weiboOAuth;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getTokenSecret() {
        return tokenSecret;
    }

    public void setTokenSecret(String tokenSecret) {
        this.tokenSecret = tokenSecret;
    }

    public void oauth() throws WeiboException, IOException {
        System.setProperty("weibo4j.oauth.consumerKey", WeiboOAuth.APP_KEY);
        System.setProperty("weibo4j.oauth.consumerSecret", WeiboOAuth.APP_SECRET);
        Weibo weibo = new Weibo();

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
            } catch (WeiboException te) {
                if (401 == te.getStatusCode()) {
                    System.out.println("Unable to get the access token.");
                } else {
                    te.printStackTrace();
                }
            }
        }
        System.out.println("Got access token.");
        System.out.println("Access token: " + accessToken.getToken());
        System.out.println("Access token secret: " + accessToken.getTokenSecret());

        WeiboOAuth.getInstance().setToken(accessToken.getToken());
        WeiboOAuth.getInstance().setTokenSecret(accessToken.getTokenSecret());
    }

    public static void main(String[] args) throws WeiboException, IOException {
        WeiboOAuth weiboOAuth = WeiboOAuth.getInstance();
        weiboOAuth.oauth();
    }
}
