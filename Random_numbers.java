package copyUtil;

import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class Random_numbers {

	 public static void main(String args[])
	    {
	        
		 
		 Scanner input = new Scanner(System.in);
		 System.out.println("Please enter the nth number");
		 final int N =500;
		 int n = input.nextInt();
		 
		    
	        Random rand = new Random();
	 
	        // Generate random integers in range 0 to 500
	        int array[] = new int [n];
	        
	        for (int i=0;i<n;i++){
	        
	        	int rand_int1 = rand.nextInt(500);
	        
	        
	        
	        	array[i] = rand_int1;
	        	//System.out.println(array[i]);
	        
	        }
	        
	        //int smallestele = findNthSmallest(array, n);
	        
	        System.out.println(array[n-1]);
	        
	    }
	 public static int findNthSmallest( int[] array, int n  ){
		 int i, j,t=0;
		    for(i = 0; i < array.length; i++){
		      for(j = 1; j < (array.length-i); j++){
		        if(array[j-1] > array[j]){
		          t = array[j-1];
		          array[j-1]=array[j];
		          array[j]=t;
		        }
		      }
		    }

		    return array[n-1];
		  }
}

