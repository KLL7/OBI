var T,N,S,P,sum;

scanf("%d%d", "T","N");
list = 0;

if(T >= 2 && T <= 200 && N >= 0 && N <= 10000){
	
   for(i=0; i < N; i++){
    
       scanf("%s%d", "S","P");
       if(P >= 0 && P<= 30000){
       sum = sum + P;
       }
       
    }
   
   printf("%d\n", ((N*3) - sum));
   
}