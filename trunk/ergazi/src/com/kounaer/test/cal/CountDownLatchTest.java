package com.kounaer.test.cal;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class CountDownLatchTest {

	public static void main(String[] args) throws Exception {
		/**
		 * 1－100求和，分10个线程来计算，每个线程对10个数求和。
		 */
		int numOfGroups = 10;
		CountDownLatch startSignal = new CountDownLatch(1);

		CountDownLatch doneSignal = new CountDownLatch(numOfGroups);

		ExecutorService service = Executors.newFixedThreadPool(numOfGroups);
		List<Future<Integer>> futures = new ArrayList<Future<Integer>>();

		submit(futures, numOfGroups, service, startSignal, doneSignal);

		/**
		 * 开始，让所有的求和计算线程运行
		 */
		startSignal.countDown();

		/**
		 * 阻塞，知道所有计算线程完成计算
		 */
		doneSignal.await();

		shutdown(service);

		printResult(futures);
	}

	private static void submit(List<Future<Integer>> futures, int numOfGroups,
			ExecutorService service, CountDownLatch startSignal,
			CountDownLatch doneSignal) {
		for (int groupNumber = 1; groupNumber <= numOfGroups; groupNumber++) {
			futures.add(service.submit(new Calculator(startSignal, doneSignal,
					groupNumber)));
		}
	}

	private static int getResult(List<Future<Integer>> futures)
			throws InterruptedException, ExecutionException {
		int result = 0;
		for (Future<Integer> f : futures) {
			result += f.get();
		}
		return result;
	}

	private static void printResult(List<Future<Integer>> futures)
			throws InterruptedException, ExecutionException {
		System.out.println("[1,100] Sum is :" + getResult(futures));
	}

	private static void shutdown(ExecutorService service) {
		service.shutdown();
	}

}