export const CPPInfo = {
  description: 'C++ adalah bahasa pemrograman tingkat menengah yang digunakan untuk pengembangan aplikasi yang membutuhkan performa tinggi, seperti game, sistem operasi, dan perangkat lunak berbasis perangkat keras.',
  uses: [
    'Mengembangkan aplikasi berbasis perangkat keras seperti driver dan sistem embedded.',
    'Membangun game menggunakan engine seperti Unreal Engine.',
    'Mengembangkan aplikasi desktop dengan performa tinggi.',
    'Digunakan untuk sistem kritis seperti sistem operasi dan database.',
  ],
  related: 'C#',
  documentationLink: 'https://www.w3schools.com/cpp/default.asp',
  example: `
    #include <iostream>
    using namespace std;

    int main() {
        cout << "Hello, World!" << endl;
        return 0;
    }
  `,
  detailedExplanation: `
    C++ adalah bahasa pemrograman yang berbasis pada C, tetapi menambahkan fitur berorientasi objek. Berikut adalah beberapa elemen penting dari C++:

    1. **Pemrograman Berorientasi Objek (OOP)**: Mendukung konsep seperti class, inheritance, dan polymorphism.
    
    2. **Kinerja Tinggi**: Digunakan untuk aplikasi yang membutuhkan kontrol langsung atas perangkat keras dan memori.
    
    3. **Standard Template Library (STL)**: Koleksi library untuk operasi seperti manipulasi array, string, dan algoritma.
    
    4. **Kompatibilitas dengan C**: Kode C dapat digunakan langsung dalam program C++, memungkinkan fleksibilitas lebih besar.

    C++ sering digunakan untuk aplikasi yang membutuhkan efisiensi dan kontrol tingkat rendah, termasuk game, simulasi, dan perangkat IoT.
  `,
};
