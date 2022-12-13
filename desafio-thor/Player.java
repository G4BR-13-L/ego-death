import java.util.*;
import java.io.*;
import java.math.*;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor
 * seems not follow your orders.
 **/
class Player {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int lightX = in.nextInt(); // the X position of the light of power
        int lightY = in.nextInt(); // the Y position of the light of power
        int initialTx = in.nextInt(); // Thor's starting X position
        int initialTy = in.nextInt(); // Thor's starting Y position

        Thor thor = new Thor(
                initialTx,
                initialTy,
                lightX,
                lightY);

        // game loop
        while (true) {
            if (thor.existeCaminhoOtimo) {
                System.out.println(thor.hipotenusa);
            } else {
                System.out.println(thor.proximoMovimentoDoThor());
            }
        }
    }
}

class Thor {
    public int Tx; // Posição X do Thor
    public int Ty; // Posição Y do Thor
    public int Lx; // Posição X do poder
    public int Ly; // Posição Y do poder
    public String hipotenusa; // Caminho perfeito que não vai se alterar
    public boolean existeCaminhoOtimo = false;

    public Thor(int Tx, int Ty, int Lx, int Ly) {
        this.Tx = Tx;
        this.Ty = Ty;
        this.Lx = Lx;
        this.Ly = Ly;
    }
    /**
     * Calcula a distancia entre o proprio thor e o ojetivo
     * @return
     */
    public int qualADistanciaEntreThorEOPoder() {
        int distancia = (int) Math
                .floor(Math.sqrt(Math.pow((this.Lx - this.Tx), 2) + Math.pow((this.Ly - this.Ty), 2)));
        return distancia;
    }

    /**
     * Calcula a distancia entre o proprio thor e o ojetivo,
     * porém com parâmetros
     * 
     * @param Tx
     * @param Ty
     * @param Lx
     * @param Ly
     * @return
     */
    public int qualADistanciaEntreThorEOPoder(int Tx, int Ty, int Lx, int Ly) {
        int distancia = (int) Math.floor(Math.sqrt(Math.pow((Lx - Tx), 2) + Math.pow((Ly - Ty), 2)));
        return distancia;
    }

    /**
     * Processa o melhor caminho a percorrer em seguida
     * 
     * @return
     */
    public String proximoMovimentoDoThor() {

        // verifica se existe um caminho otimo pre estabelecido
        if (this.existeCaminhoOtimo) {
            return this.hipotenusa;
        }

        // Verifica se existe uma caminho direto na diagonal
        if ((this.Tx - this.Lx == 0) && (this.Ty - this.Ly == 0)) {
            this.existeCaminhoOtimo = true;
            if (this.Tx < this.Lx) {
                if (this.Ty < this.Ly) {
                    this.hipotenusa = "SE";
                    return "SE";
                } else {
                    this.hipotenusa = "NE";
                    return "NE";
                }
            } else {
                if (this.Ty < this.Ly) {
                    this.hipotenusa = "SW";
                    return "SW";
                } else {
                    this.hipotenusa = "NW";
                    return "NW";
                }
            }
        } else {
            // Verifica se o thor compartilha do mesmo eixo que o
            // objetivo
            if (this.Tx == this.Lx) {
                if (this.Ty > this.Ly) {
                    this.Ty -= 1;
                    return "N";
                } else {
                    this.Ty += 1;
                    return "S";
                }
            }

            if (this.Ty == this.Ly) {
                if (this.Tx < this.Lx) {
                    this.Tx += 1;
                    return "E";
                } else {
                    this.Tx -= 1;
                    return "W";
                }
            }

        }
        return this.thorDijkstra();
    }

    public String thorDijkstra() {
        // 0 1 2 3 4 5 6 7 8
        // N NE E SE S SW W NW
        /**
         * Faz a busca pelo caminho que minimiza a distancia
         * até o poder (Dijkstra)
         */
        int[] caminhos = {
                qualADistanciaEntreThorEOPoder(this.Tx, this.Ty - 1, this.Lx, this.Ly),
                qualADistanciaEntreThorEOPoder(this.Tx + 1, this.Ty - 1, this.Lx, this.Ly) - 1,
                qualADistanciaEntreThorEOPoder(this.Tx + 1, this.Ty, this.Lx, this.Ly),
                qualADistanciaEntreThorEOPoder(this.Tx + 1, this.Ty + 1, this.Lx, this.Ly) - 1,
                qualADistanciaEntreThorEOPoder(this.Tx, this.Ty + 1, this.Lx, this.Ly),
                qualADistanciaEntreThorEOPoder(this.Tx - 1, this.Ty + 1, this.Lx, this.Ly) - 1,
                qualADistanciaEntreThorEOPoder(this.Tx - 1, this.Ty, this.Lx, this.Ly),
                qualADistanciaEntreThorEOPoder(this.Tx - 1, this.Ty - 1, this.Lx, this.Ly) - 1
        };

        // Maior distancia conhecida
        int caminhoMinimal = 9999;
        int caminhoMinimalIndex = 0;

        // Busca pelo melho caminho processado anteriormente
        for (int i = 0; i < 8; i++) {
            if (caminhos[i] < caminhoMinimal) {
                caminhoMinimal = caminhos[i];
                caminhoMinimalIndex = i;
            }
        }

        if (caminhoMinimalIndex == 0) {
            this.Ty -= 1;
            return "N";
        }
        if (caminhoMinimalIndex == 1) {
            this.Tx += 1;
            this.Ty -= 1;
            return "NE";
        }
        if (caminhoMinimalIndex == 2) {
            this.Tx += 1;
            return "E";
        }
        if (caminhoMinimalIndex == 3) {
            this.Tx += 1;
            this.Ty += 1;
            return "SE";
        }
        if (caminhoMinimalIndex == 4) {
            this.Ty += 1;
            return "S";
        }
        if (caminhoMinimalIndex == 5) {
            this.Tx -= 1;
            this.Ty += 1;
            return "SW";
        }
        if (caminhoMinimalIndex == 6) {
            this.Tx -= 1;
            return "W";
        }
        if (caminhoMinimalIndex == 7) {
            this.Ty -= 1;
            this.Tx -= 1;
            return "NW";
        }
        return "";

    }

}