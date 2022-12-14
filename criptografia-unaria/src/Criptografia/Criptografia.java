package src.Criptografia;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

public class Criptografia {
    public static String encriptar(String plainText) throws UnsupportedEncodingException {

        // Criando o array de ASCIIss
        byte[] ascii_array = plainText.getBytes("US-ASCII");

        // Criando o array de strings do mesmo tamanho que o array de ASCII
        String[] binary_array = new String[ascii_array.length];


        // Convertendo todos os ASCII para string de binário
        for (int i = 0; i < ascii_array.length; i++) {
            binary_array[i] = Integer.toBinaryString(ascii_array[i]);
        }

        // Compensando todos os zeros
        for (int i = 0; i < binary_array.length; i++) {
            binary_array[i] = compensarZeros(binary_array[i]);
        }

        // String final encriptada
        String encripted_str = "";

        // Stringzona de zeros e ums
        String binary_string = "";

        // Criando a super string binária
        for (int i = 0; i < binary_array.length; i++) {
            binary_string += binary_array[i].trim();
        }


        // Encriptando
        for (int i = 0; i < binary_string.length(); i++) {
            if (binary_string.charAt(i) == '1') {
                encripted_str += "0 ";
                encripted_str += calcularQtdZeros(binary_string, i, '1');
                i += quantosCaracteresExistemAdiante(binary_string, i, '1') - 1;
            } else {
                encripted_str += "00 ";
                encripted_str += calcularQtdZeros(binary_string, i, '0');
                i += quantosCaracteresExistemAdiante(binary_string, i, '0') - 1;
            }
        }
        return encripted_str.trim();
    }


    /**
     * Compensa os zeros a esquerda de um
     * binário para que ele tenha 7 caracteres
     * @param string
     * @return
     */
    private static String compensarZeros(String string) {
        if (string.length() == 7) {
            return string;
        } else {
            for (int i = string.length(); i < 7; i++) {
                string = "0" + string;
            }
        }
        return string;
    }

    /**
     * Calcula a quantidade de zeros a ser adicionada 
     * para representar as repetições de um caractere 
     * @param string
     * @param i
     * @param c
     * @return
     */
    private static String calcularQtdZeros(String string, int i, char c) {
        String str = "";
        int cont = quantosCaracteresExistemAdiante(string, i, c);

        for (int j = 0; j < cont; j++) {
            str += "0";
        }
        return str + " ";
    }


    /**
     * responde quantas vezes um caractere se 
     * repete sequencialmente em um determinado ponto da string
     * @param string
     * @param posicao
     * @param caractere
     * @return
     */
    public static int quantosCaracteresExistemAdiante(String string, int posicao, char caractere) {
        int cont = 0;
        while ((posicao + cont < string.length()) && (string.charAt(posicao + cont) == caractere)) {
            cont++;
        }
        return cont;
    }
}