
import java.io.UnsupportedEncodingException;
import Criptografia.Criptografia;

public class Main {
    public static void main(String[] args) throws UnsupportedEncodingException {
        System.out.println(Criptografia.encriptar("C"));
        System.out.println(Criptografia.encriptar("CC"));
        System.out.println(Criptografia.encriptar("%"));
        
        System.out.println(Criptografia.encriptar("Chuck Norris' keyboard has 2 keys: 0 and white space."));
    }

}
