import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginCompleteScreen() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      if (login === 'João@gmail.com' && password === 'senha123') {
        setIsLoggedIn(true);
        setLoading(false);
      } else {
        Alert.alert('Erro de Autenticação', 'Usuário ou senha incorretos.');
        setLoading(false);
      }
    }, 2000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      {!isLoggedIn ? (
        <>
          <View style={styles.greetingContainer}>
            <Icon name="leaf" size={50} color="#76CD3D" style={styles.icon} />
            <Text style={styles.welcome}>Seja Bem-Vindo</Text>
          </View>

          <TextInput
            placeholder="Usuário"
            value={login}
            onChangeText={setLogin}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity onPress={() => alert('Recuperação de senha')} style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Entrar</Text>
            )}
          </TouchableOpacity>
        </>
      ) : (
        <>
          {/* Foto do Usuário */}
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>João Silva</Text>
          <Text style={styles.email}>João@gmail.com</Text>

          {/* Status de pontos de coleta registrados */}
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsTitle}>Pontos de Coleta Registrados</Text>
            <Text style={styles.pointsCount}>2 ponto(s)</Text>

            {/* Lista de pontos de coleta */}
            <View style={styles.pointCard}>
              <Text style={styles.pointName}>EcoNatal Reciclagem</Text>
              <Text style={styles.pointAddress}>Av. Engenheiro Roberto Freire, 2000 - Natal, RN</Text>
            </View>

            <View style={styles.pointCard}>
              <Text style={styles.pointName}>Recicla Mossoró</Text>
              <Text style={styles.pointAddress}>Rua Frei Miguelinho, 300 - Mossoró, RN</Text>
            </View>
          </View>

          {/* Botão de Sair */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  greetingContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginBottom: 10, 
  },
  welcome: {
    fontSize: 25,
    color: '#555',
  },
  input: {
    width: 296,
    height: 55,
    borderRadius: 29,
    backgroundColor: '#E9E9E9',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginBottom: 32,
  },
  forgotPasswordText: {
    color: '#8DC63F',
  },
  button: {
    width: 274,
    height: 51,
    flexShrink: 0,
    borderRadius: 27,
    backgroundColor: '#76CD3D',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7.314 },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  email: {
    fontSize: 18,
    color: '#666',
    marginBottom: 24,
  },
  pointsContainer: {
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 5,
  },
  pointsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  pointsCount: {
    fontSize: 16,
    color: '#76CD3D',
    marginBottom: 15,
  },
  pointCard: {
    backgroundColor: '#f4f4f4',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#76CD3D',
  },
  pointName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  pointAddress: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  logoutButton: {
    width: 274,
    height: 51,
    flexShrink: 0,
    borderRadius: 27,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 7,
  },
});
