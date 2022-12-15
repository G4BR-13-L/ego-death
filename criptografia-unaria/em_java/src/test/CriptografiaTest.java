package test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.io.UnsupportedEncodingException;
import Criptografia.Criptografia;

import org.junit.Test;

public class CriptografiaTest {

    @Test
    public void EncriptarTest() throws UnsupportedEncodingException {
        assertEquals("0 0 00 0000 0 00", Criptografia.encriptar("C"));
        assertEquals("0 0 00 0000 0 000 00 0000 0 00", Criptografia.encriptar("CC"));
        assertEquals("00 0 0 0 00 00 0 0 00 0 0 0", Criptografia.encriptar("%"));
        assertEquals(
                "0 0 00 0000 0 0000 00 0 0 0 00 000 0 000 00 0 0 0 00 0 0 000 00 000 0 0000 00 0 0 0 00 0 0 00 00 0 0 0 00 00000 0 0 00 00 0 000 00 0 0 00 00 0 0 0000000 00 00 0 0 00 0 0 000 00 00 0 0 00 0 0 00 00 0 0 0 00 00 0 0000 00 00 0 00 00 0 0 0 00 00 0 000 00 0 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 000 00 000 0 0 00 0 0 00 00 0 0 000000 00 0000 0 0000 00 00 0 0 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 00 00 0 0 0 00 000 0 00 00 0000 0 0000 00 00 0 00 00 0 0 0 00 000000 0 00 00 00 0 0 00 00 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 0000 00 00 0 00 00 0 0 000 00 0 0 0 00 00 0 0 00 000000 0 00 00 00000 0 0 00 00000 0 00 00 0000 0 000 00 0 0 000 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 000 00 0 0 00000 00 0 0 0 00 000 0 00 00 0 0 0 00 00 0 0000 00 0 0 0 00 00 0 00 00 00 0 0 00 0 0 0 00 0 0 0 00 00000 0 000 00 00 0 00000 00 0000 0 00 00 0000 0 000 00 000 0 0000 00 00 0 0 00 0 0 0 00 0 0 0 00 0 0 000 00 0",
                Criptografia.encriptar("Chuck Norris' keyboard has 2 keys: 0 and white space."));
    }
}
