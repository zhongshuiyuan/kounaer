package com.kounaer.test.proxy;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

public class PersonProxyJdk implements InvocationHandler {
	private Object targetObj;

	/**
	 * 
	 * @param obj
	 *            被代理对象
	 * @return 代理对象的实例
	 */
	public Object createProxyInstance(Object obj) {
		this.targetObj = obj;
		/*
		 * 参数说明 参数一：ClassLoader,定义代理类的类加载器 参数二：Class<?>,代理类要实现的接口列表
		 * 参数三：InvocationHandler，指派方法调用的调用处理程序 （指定调运哪个类的invoke方法）
		 */
		return Proxy.newProxyInstance(obj.getClass().getClassLoader(),
				this.targetObj.getClass().getInterfaces(), this);
	}

	/*
	 * 当代理对象的方法被调运时，就会执行回调函数invoke方法，让这个回调函数再去执行目标代码的指定方法，
	 * 并且会将代理对象接收到的参数传递给目标代码。 这是一个回调函数。 注意：method args 都是由调运代理对象后产生的。所以是确定的。
	 * 还可以在这个回调函数中做一些手脚，比如限制调运或者其他。
	 */
	@Override
	public Object invoke(Object proxy, Method method, Object[] args)
			throws Throwable {
		Object result = null;
		System.out.print("我是*");
		result = method.invoke(targetObj, args);
		System.out.println("*人");
		return result;
	}

}
