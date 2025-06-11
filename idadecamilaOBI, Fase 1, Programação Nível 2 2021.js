var Lista, N;
Lista = [];
N = 0;

for(i=0;i<3;i++){
   
   scanf("%d", "N");
   
   if(N >=5 && N <= 100){
   
      Lista.push(N);
      
   }

}


Lista.sort(function(a,b){

return a-b;
   
});
 
printf("%d\n", Lista[1]);

