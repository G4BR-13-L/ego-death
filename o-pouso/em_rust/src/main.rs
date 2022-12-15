/*fn main() {
    let montanhas = [1,20,39];
    println!("{:?}", atirar(&montanhas));
}
*/
fn atirar(montanhas: &[u32]) -> usize {
    let mut mais_alta_index: usize = 0;
    let mut mais_alta: u32 = 0;
    
    for i in 0..montanhas.len() {
        if montanhas[i] > mais_alta {
            mais_alta_index = i;
            mais_alta = montanhas[i];
        }
    }

    return mais_alta_index;
}

#[cfg(test)]
mod nave_test;
