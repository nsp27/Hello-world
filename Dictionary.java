package copyUtil;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

public class Dictionary {
	

	static String path = "input.txt";
	
	public static String doesFileExist (String path) {
	
    boolean fileempty = false;
    
    try {
           
    	fileempty = path.isEmpty();
            	
    }
       
     
       
    catch(Exception e) {
    
       e.printStackTrace();
    }
	return path;
	
	}
	
	
	
	public static void main( String[] args ) throws IOException
	{
		 
		String filePath = doesFileExist(path);
	    HashMap<String, String> map = new HashMap<String, String>();

	    String line;
	    BufferedReader reader = new BufferedReader(new FileReader(filePath));
	    while ((line = reader.readLine()) != null)
	    {
	        String[] parts = line.split(":-", 2);
	        if (parts.length >= 2)
	        {
	            String key = parts[0];
	            String value = parts[1];
	           
	                      
	            map.put(key, value);
	            
	         
	            
	        } else {
	            System.out.println("ignoring line: " + line);
	        }
	    }

	    for (String key : map.keySet())
	    {
	       
	        	String values = map.get(key);
	        	
	        	String[] value1 = values.split(",",2);
	        	if (value1.length >=2){
	        		String value2 = value1[0];
	        		String value3 = value1[1];
	        		
	        		System.out.println(key + ":");
	        		System.out.println(value2);
	        		System.out.println(value3);
	        		
	        	}
	        	
	        	if (value1.length == 1){
	        		
	        		System.out.println(key + ":");
	        		System.out.println(map.get(key));
	        		
	        		
	        	}
	        	
	        
	        
	    	
	    }
	    reader.close();
	}


}
