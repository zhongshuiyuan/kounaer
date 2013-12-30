package com.kounaer.test.proxy;

public class PersonProxy implements Person {
	private Person person;// 被代理对象

	public PersonProxy(Person p) {
		this.person = p;
	}

	@Override
	public void say() {
		System.out.print("我是-");
		person.say();// 在目标方法前后分别添加操作
		System.out.println("-人");
	}

}
