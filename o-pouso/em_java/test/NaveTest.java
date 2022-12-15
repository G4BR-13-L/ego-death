package test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import Nave.Montanha;
import Nave.Nave;

public class NaveTest {
    

    @Test
    public void ArtirarNoAlvoCerto(){
        List<Montanha> montanhas = new ArrayList<>();
        montanhas.add(new Montanha(10));
        montanhas.add(new Montanha(33));
        montanhas.add(new Montanha(12));
        montanhas.add(new Montanha(150));
        assertEquals(3, Nave.atirar(montanhas));
         
    }
}
