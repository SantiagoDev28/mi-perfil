import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ProjectCardProps {
  emoji: string;
  titulo: string;
  descripcion: string;
  tags: string[];
}

export default function ProjectCard({
  emoji,
  titulo,
  descripcion,
  tags,
}: ProjectCardProps) {
  return (
    <TouchableOpacity style={styles.projectCard}>
      <View style={styles.projectHeader}>
        <Text style={styles.projectEmoji}>{emoji}</Text>
        <Text style={styles.projectTitulo}>{titulo}</Text>
      </View>
      <Text style={styles.projectDescripcion}>{descripcion}</Text>
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  projectCard: {
    backgroundColor: "#2a2a2a",
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d4af37",
  },
  projectHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
  },
  projectEmoji: {
    fontSize: 28,
    marginRight: 12,
  },
  projectTitulo: {
    fontSize: 18,
    fontWeight: "700",
    color: "#d4af37",
    flex: 0,
  },
  projectDescripcion: {
    fontSize: 14,
    color: "#e0e0e0",
    lineHeight: 20,
    marginVertical: 10,
    textAlign: "center",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
  },
  tag: {
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 18,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#d4af37",
  },
  tagText: {
    fontSize: 12,
    color: "#d4af37",
    fontWeight: "600",
  },
});
