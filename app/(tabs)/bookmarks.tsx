import { useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { SplashScreen } from 'expo-router';
import { MapPin, Bookmark as BookmarkIcon } from 'lucide-react-native';

SplashScreen.preventAutoHideAsync();

const savedProperties = [
  {
    id: 1,
    title: 'Modern Family Home',
    location: 'Downtown LA, California',
    price: '$2,850,000',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    saved: true,
  },
  {
    id: 2,
    title: 'Luxury Penthouse',
    location: 'Beverly Hills, California',
    price: '$5,250,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    saved: true,
  },
  {
    id: 3,
    title: 'Beachfront Villa',
    location: 'Malibu, California',
    price: '$8,900,000',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    saved: true,
  },
];

export default function BookmarksScreen() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.header}>
        <Text style={styles.title}>Saved Properties</Text>
        <Text style={styles.subtitle}>Your favorite listings in one place</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {savedProperties.map((property) => (
          <TouchableOpacity key={property.id} style={styles.propertyCard}>
            <Image source={{ uri: property.image }} style={styles.propertyImage} />
            <TouchableOpacity style={styles.bookmarkButton}>
              <BookmarkIcon size={20} color="#3b82f6" fill="#3b82f6" />
            </TouchableOpacity>
            <View style={styles.propertyInfo}>
              <Text style={styles.propertyTitle}>{property.title}</Text>
              <View style={styles.locationContainer}>
                <MapPin size={16} color="#64748b" />
                <Text style={styles.propertyLocation}>{property.location}</Text>
              </View>
              <Text style={styles.propertyPrice}>{property.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  propertyCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  propertyImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  bookmarkButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  propertyInfo: {
    padding: 16,
  },
  propertyTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1e293b',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  propertyLocation: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
  },
  propertyPrice: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#3b82f6',
  },
});