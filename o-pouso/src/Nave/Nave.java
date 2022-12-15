package Nave;

import java.util.List;

public class Nave{
    
    /**
     * Diz em qual montanha o tiro vai pegar
     * @param montanhas
     * @return
     */
    public static int atirar(List<Montanha> montanhas){
        Montanha mais_alta = new Montanha(0);
        int mais_alta_index = 0;
        
        // Busca pela montanha mais alta
        for( int i = 0 ; i < montanhas.size() ; i ++  ){
            if ( montanhas.get(i).altura > mais_alta.altura ){
                mais_alta = montanhas.get(i);
                mais_alta_index = i;
            }
        }

        // retorna o indice da montanha mais alta
        return mais_alta_index;
    }
}