package com.kounaer.test.cal;

import java.util.concurrent.Callable;
import java.util.concurrent.CountDownLatch;

public class Calculator implements Callable<Integer> {

	// 开始信号
	private final CountDownLatch startSignal;

	// 结束信号
	private final CountDownLatch doneSignal;

	private int groupNumber = 0;

	/**
	 * @param startSignal
	 * @param endSignal
	 * @param groupId
	 */
	public Calculator(CountDownLatch startSignal, CountDownLatch doneSignal,
			int groupNumber) {
		this.startSignal = startSignal;
		this.doneSignal = doneSignal;
		this.groupNumber = groupNumber;
	}

	public Integer call() throws Exception {

		startSignal.await();

		Integer result = sum(groupNumber);

		printCompleteInfor(groupNumber, result);

		doneSignal.countDown();

		return result;
	}

	private Integer sum(int groupNumber) {
		if (groupNumber < 1) {
			throw new IllegalArgumentException();
		}

		int sum = 0;
		int start = (groupNumber - 1) * 10 + 1;
		int end = groupNumber * 10;
		for (int i = start; i <= end; i++) {
			sum += i;
		}
		return sum;
	}

	private void printCompleteInfor(int groupNumber, int sum) {
		System.out.println(String.format(
				"Group %d is finished, the sum in this gropu is %d",
				groupNumber, sum));
	}

}
