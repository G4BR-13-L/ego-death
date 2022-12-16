//use adder;

#[cfg(test)]

mod nave_test {
    //    use super::*;
    use crate::atirar;

    #[test]
    fn it_adds_two() {
        let m1 = [0,1,2,3,4,5,6,7];
        let m2 = [8,7,6,5,4,3,2,1,0];
        let m3 = [1,199,2];
        let m4 = [800];

        assert_eq!(atirar(&m1), 7);
        assert_eq!(atirar(&m2), 0);
        assert_eq!(atirar(&m3), 1);
        assert_eq!(atirar(&m4), 0);
    }
}
