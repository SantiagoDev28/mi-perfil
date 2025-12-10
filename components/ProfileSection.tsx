import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileSection() {
  return (
    <>
      {/* Header con color sólido */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mi perfil</Text>
      </View>

      {/* Avatar a la izquierda con info a la derecha */}
      <View style={styles.profileRow}>
        <View style={styles.avatarContainerRow}>
          <Image source={require("../img/IMG_1981.jpg")} style={styles.avatar} />
        </View>
        <View style={styles.infoContainerRow}>
          <Text style={styles.nombre}>Santiago Hurtado</Text>
          <Text style={styles.profesion}>Desarrollador Web</Text>
        </View>
      </View>

      {/* Info de contacto */}
      <View style={styles.contactCard}>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Email</Text>
          <Text style={styles.contactText}>shurtado308@gmail.com</Text>
        </View>
        <View style={styles.contactDivider} />
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Ubicación</Text>
          <Text style={styles.contactText}>Bogotá, Colombia</Text>
        </View>
        <View style={styles.contactDivider} />
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Portfolio</Text>
          <Text style={styles.contactText}>https://github.com/SantiagoDev28</Text>
        </View>
      </View>

      {/* Sobre Mí */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sobre Mí</Text>
        </View>
        <Text style={styles.bioText}>
          Soy un desarrollador apasionado por crear código limpio, escalable y de calidad.
          Comprometido con la excelencia en cada proyecto, me motiva constantemente aprender
          nuevas tecnologías y mejorar mis habilidades. Creo que el aprendizaje continuo es
          la clave para crecer como profesional y aportar soluciones innovadoras.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#1a1a1a",
    marginHorizontal: 20,
    borderRadius: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#d4af37",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#d4af37",
    letterSpacing: 1,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: "#d4af37",
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -30,
    marginHorizontal: 20,
  },
  avatarContainerRow: {
    width: 140,
    alignItems: "flex-start",
  },
  infoContainerRow: {
    flex: 1,
    paddingLeft: 12,
    alignItems: "flex-start",
  },
  nombre: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 4,
  },
  profesion: {
    fontSize: 15,
    color: "#d4af37",
    fontWeight: "600",
  },
  contactCard: {
    backgroundColor: "#2a2a2a",
    marginHorizontal: 30,
    marginTop: 18,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#d4af37",
  },
  contactItem: {
    paddingVertical: 10,
  },
  contactLabel: {
    fontSize: 12,
    color: "#d4af37",
    fontWeight: "700",
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  contactText: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "500",
  },
  contactDivider: {
    height: 1,
    backgroundColor: "#444444",
    marginVertical: 8,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 22,
  },
  sectionHeader: {
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#d4af37",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  bioText: {
    fontSize: 15,
    color: "#e0e0e0",
    lineHeight: 22,
    textAlign: "center",
  },
});
