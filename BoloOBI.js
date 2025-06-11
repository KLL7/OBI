var A,B,C,Bolototal,Constantebolo;

scanf("%d%d%d", "A","B","C");
Bolototal = 0;

if(A<2){
Bolototal = "Farinha de trigo insuficiente";
}
if(B<3){
Bolototal = "Ovo insuficiente";
}
if(C<5){
Bolototal = "Leite insuficiente";
}
while(A>=2 && B>=3 && C>=5){
A -=2;
B -=3;
C -=5;
Bolototal += 1;
}

printf("%d", Bolototal);
