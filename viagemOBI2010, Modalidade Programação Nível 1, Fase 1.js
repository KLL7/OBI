var L,D,K,P,Custoviagem,Custopedagio, Custototal;
scanf("%d%d", "L","D");
scanf("%d%d", "K","P");

Custopedagio = (Math.floor(L/D))*P;
Custoviagem = L*K;
Custototal = Custopedagio + Custoviagem;

printf("%d\n", Custototal);