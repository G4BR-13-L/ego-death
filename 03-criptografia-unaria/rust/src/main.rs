fn main() {
    let msg: &'static str = "C";
    //0 0 00 0000 0 00
    println!("{}", encriptar(msg))
}

fn encriptar(message: &str) -> String {
    let binary_string_vec: Vec<String> =
        message.chars().map(|c| format!("{:b}", c as u8)).collect();

    let zero = "".to_string();

    let string_binary = binary_string_vec.iter().fold(zero, |string_b, item| {
        if item.len() < 7 {
            return string_b + "0" + item;
        } else {
            return string_b + item;
        }
    });

    let mut encripted_string = "".to_owned();

    let mut i = 0;
    while i < string_binary.len() {
        if string_binary.as_bytes()[i] == "1".as_bytes()[0] {
            encripted_string.push_str("0 ");
            encripted_string.push_str(calcular_qtd_zeros(string_binary.as_str(), i, '1').as_str());
            i += quantos_caracteres_existem_a_diante(string_binary.as_str(), i, '1');
        } else {
            encripted_string.push_str("00 ");
            encripted_string.push_str(calcular_qtd_zeros(string_binary.as_str(), i, '0').as_str());
            i += quantos_caracteres_existem_a_diante(string_binary.as_str(), i, '0');
        }
    }
    return encripted_string.trim().to_string();
}

fn calcular_qtd_zeros(string: &str, i: usize, c: char) -> String {
    let mut stri = "".to_owned();
    let cont = quantos_caracteres_existem_a_diante(string, i, c);

    for _j in 0..cont {
        stri.push_str("0");
    }
    stri.push_str(" ");
    return stri;
}

fn quantos_caracteres_existem_a_diante(string: &str, posicao: usize, caractere: char) -> usize {
    let mut cont: usize = 0;
    while (posicao + cont < string.len())
        && (string.as_bytes()[posicao + cont] == caractere.to_string().as_bytes()[0])
    {
        cont += 1;
    }
    return cont;
}

#[cfg(test)]
mod encriptar_tests;
