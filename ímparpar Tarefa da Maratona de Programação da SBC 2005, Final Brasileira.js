var N,M,J,Mp,Mi,Ji,Jp;
M=[];
J=[];
Mp = 0;
Ji = 0;
scanf("%d", "N");
if(N >=1 && N<= 100){

   for(i=0;i<N;i++){
   
      scanf("%d", "M[i]");
      
      if(M[i]%2 === 0){
      Mp += 1;
      }
      
   }
   
   for(i=0;i<N;i++){
   
      scanf("%d", "J[i]");
     
      if(J[i]%2 !== 0){
      Ji += 1;
      }
      
   }
   
   
   var Mi = N - Mp;
   var Jp = N - Ji;
   
   if(Jp - Mi < 0){
   var total = (Jp-Mi)*-1;
   printf("%d\n", total);
   }
   else{
   printf("%d\n", (Jp - Mi));
   }
   
}
