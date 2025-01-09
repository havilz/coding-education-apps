import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuizScreen = ({ route, navigation }) => {
  const { item } = route.params; // Elemen yang dipilih (contoh: 'JavaScript')
  const [currentQuestion, setCurrentQuestion] = useState(0); // Pertanyaan saat ini
  const [score, setScore] = useState(0); // Skor pengguna
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // Untuk reset kontrol

  // Data kuis untuk setiap elemen
  const quizData = {
    JavaScript: [
      { question: 'Apa itu JavaScript?', options: ['Bahasa markup', 'Bahasa pemrograman'], answer: 'Bahasa pemrograman' },
      { question: 'Apa fungsi DOM dalam JavaScript?', options: ['Memanipulasi elemen HTML', 'Menjalankan backend'], answer: 'Memanipulasi elemen HTML' },
      { question: 'Apa itu Closure dalam JavaScript?', options: ['Fungsi dalam fungsi', 'Penutupan aplikasi'], answer: 'Fungsi dalam fungsi' },
    ],
    Python: [
      { question: 'Apa ekstensi file Python?', options: ['.py', '.java'], answer: '.py' },
      { question: 'Apa itu PEP 8?', options: ['Framework', 'Gaya penulisan kode'], answer: 'Gaya penulisan kode' },
      { question: 'Fungsi apa untuk mencetak di Python?', options: ['print()', 'console.log()'], answer: 'print()' },
    ],
    HTML: [
      { question: 'Tag apa untuk hyperlink?', options: ['<a>', '<link>'], answer: '<a>' },
      { question: 'Apa itu atribut dalam HTML?', options: ['Properti tambahan', 'Komponen visual'], answer: 'Properti tambahan' },
      { question: 'Tag apa untuk heading terbesar?', options: ['<h1>', '<h6>'], answer: '<h1>' },
    ],
    CSS: [
      { question: 'Apa kepanjangan dari CSS?', options: ['Cascading Style Sheets', 'Color Syntax'], answer: 'Cascading Style Sheets' },
      { question: 'Bagaimana menambahkan warna latar belakang?', options: ['background-color', 'color'], answer: 'background-color' },
      { question: 'Properti apa untuk margin?', options: ['margin', 'padding'], answer: 'margin' },
    ],
  };

  const questions = quizData[item] || [];

  // Fungsi untuk menangani jawaban
  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizFinished(true); // Selesai kuis
      setHasStarted(false);
    }
  };

  // Fungsi untuk me-reset kuis
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizFinished(false);
    setHasStarted(true);
  };

  return (
    <View style={styles.container}>
      {isQuizFinished ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Kuis selesai!</Text>
          <Text style={styles.scoreText}>
            Skor Anda: {score}/{questions.length}
          </Text>
          <Text style={styles.message}>
            {score === questions.length
              ? 'Luar biasa! Anda menguasai topik ini!'
              : 'Bagus! Cobalah lagi untuk hasil yang lebih baik.'}
          </Text>
          <TouchableOpacity style={styles.resetButton} onPress={resetQuiz}>
            <Text style={styles.resetButtonText}>Mulai Lagi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Kembali ke Materi</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.question}>
            {currentQuestion + 1}. {questions[currentQuestion]?.question}
          </Text>
          {questions[currentQuestion]?.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  quizContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 20,
    marginBottom: 10,
    color: '#4CAF50',
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  resetButton: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#3F51B5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default QuizScreen;
