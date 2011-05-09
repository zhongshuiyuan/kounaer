package com.kounaer.test;
/**
 * http://linliangyi2007.iteye.com/blog/176345
 */
import org.jbpm.graph.def.ProcessDefinition;
import org.jbpm.graph.exe.ProcessInstance;
import org.jbpm.graph.exe.Token;

public class TestProcess {

	public void testProcess1(){
		ProcessDefinition pd = ProcessDefinition.parseXmlResource("com/kounaer/test/proc/1/processdefinition.xml");
		ProcessInstance pi = new ProcessInstance(pd);
		Token t = pi.getRootToken();
		System.out.println(t.getNode());
		t.signal();
		System.out.println(t.getNode());
	}
	
	public static void main(String[] s){
		new TestProcess().testProcess1();
	}
}
