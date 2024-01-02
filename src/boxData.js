/*Index(['artist', 'track', 'release_year', 'popularity', 'rad', 'decade',
       'julia_rank', 'danceability', 'energy', 'key', 'loudness', 'mode',
       'speechiness', 'acousticness', 'instrumentalness', 'liveness',
       'valence', 'tempo', 'duration_ms', 'time_signature', 'noise'],
      dtype='object')*/
export let boxData = [['Strawberry Alarm Clock', 'Incense And Peppermints', 1967, 53, 40.0, 1, 1, 0.484, 0.655, 4, -11.118, 1, 0.0316, 0.033, 0.0, 0.0885, 0.634, 133.158, 167.4, 4, 2.519], ['Jerry Garcia Band', 'Cats Under The Stars', 1978, 41, 32.66, 2, 2, 0.691, 0.672, 0, -6.924, 1, 0.0247, 0.104, 0.000867, 0.0478, 0.555, 90.369, 331.0, 4, 1.966], ['Grateful Dead', 'Althea', 1980, 60, 29.542, 3, 3, 0.786, 0.373, 9, -10.838, 1, 0.0342, 0.496, 0.218, 0.113, 0.594, 82.717, 412.3, 4, 2.194], ['The Rolling Stones', 'Doo Doo Doo Doo Doo (Heartbreaker)', 1973, 56, 27.713, 2, 4, 0.439, 0.827, 0, -4.593, 1, 0.0335, 0.0646, 0.374, 0.0844, 0.54, 111.297, 206.5, 4, 2.273], ['Frank Zappa', 'Uncle Remus', 1974, 58, 26.471, 2, 5, 0.484, 0.66, 0, -11.163, 1, 0.0358, 0.034, 0.0812, 0.0893, 0.742, 78.591, 169.6, 4, 3.271], ['Steely Dan', 'Doctor Wu', 1975, 48, 25.555, 2, 6, 0.68, 0.556, 9, -10.619, 0, 0.039, 0.295, 1.79e-06, 0.0855, 0.715, 121.171, 234.6, 4, 2.058], ['Jean-Luc Ponty', 'Mirage', 1977, 44, 24.841, 2, 7, 0.443, 0.668, 2, -11.131, 0, 0.0355, 0.0588, 0.855, 0.117, 0.631, 94.401, 294.0, 4, 1.269], ['The Rolling Stones', "Jumpin' Jack Flash", 1968, 59, 24.263, 1, 8, 0.592, 0.911, 3, -6.641, 1, 0.0531, 0.0812, 0.634, 0.0988, 0.662, 137.252, 223.3, 4, 1.352], ['Ultimate Spinach', '(Ballad of) the Hip Death Goddess', 1968, 34, 23.782, 1, 9, 0.479, 0.654, 11, -12.754, 0, 0.0452, 0.157, 0.561, 0.328, 0.6, 104.44, 496.5, 4, 2.527], ['Yes', 'Siberian Khatru', 1972, 42, 23.372, 2, 10, 0.348, 0.738, 11, -8.401, 0, 0.0443, 0.027, 0.0185, 0.134, 0.577, 118.668, 532.9, 4, 2.306], ['Buffalo Springfield', 'Mr. Soul', 1967, 60, 23.018, 1, 11, 0.671, 0.551, 9, -12.996, 1, 0.0331, 0.0951, 9.17e-05, 0.0438, 0.962, 134.788, 171.5, 4, 3.295], ['Creedence Clearwater Revival', "Looking' Out My Backdoor", 1970, 73, 22.707, 2, 12, 0.751, 0.549, 10, -9.939, 1, 0.0395, 0.174, 0.00458, 0.0919, 0.847, 105.276, 152.4, 4, 1.992], ['Arlo Guthrie', 'Coming into Los Angeles', 1969, 46, 22.43, 1, 13, 0.558, 0.744, 4, -7.791, 0, 0.037, 0.569, 0.000148, 0.24, 0.54, 128.949, 186.5, 4, 1.884], ['Kaleidoscope', 'Keep Your Mind Open', 1967, 32, 22.183, 1, 14, 0.484, 0.485, 9, -13.054, 1, 0.0329, 0.279, 1.67e-06, 0.267, 0.305, 93.311, 138.4, 4, 1.502], ['Jerry Garcia', 'The Wheel', 1972, 37, 21.959, 2, 15, 0.401, 0.511, 0, -14.343, 1, 0.0397, 0.376, 0.00036, 0.187, 0.697, 140.613, 243.4, 4, 2.523], ['T.Rex', 'Get It On', 1971, 72, 21.755, 2, 16, 0.728, 0.878, 11, -6.926, 0, 0.0564, 0.176, 0.856, 0.61, 0.911, 126.59, 262.6, 4, 3.448], ['The First Edition', 'Just Dropped In (To See What Condition My Condition Was In)', 1967, 58, 21.568, 1, 17, 0.58, 0.551, 9, -9.898, 0, 0.0582, 0.181, 0.00719, 0.15, 0.516, 115.896, 201.2, 4, 1.472], ['Paul McCartney', 'Nineteen Hundred And Eighty Five', 1973, 46, 21.396, 2, 18, 0.53, 0.644, 8, -8.193, 1, 0.026, 0.0112, 0.817, 0.372, 0.364, 115.32, 331.8, 4, 3.593], ['The Rolling Stones', 'Paint It, Black', 1966, 85, 21.237, 1, 19, 0.464, 0.795, 1, -9.267, 1, 0.0926, 0.0493, 0.00244, 0.399, 0.612, 158.691, 202.3, 4, 3.254], ['Fleetwood Mac', 'Sunny Side Of Heaven', 1972, 39, 21.088, 2, 20, 0.454, 0.415, 9, -16.757, 1, 0.0254, 0.613, 0.853, 0.145, 0.552, 165.56, 190.7, 4, 2.935], ['Tangerine Dream', 'Stratosfear', 1976, 31, 20.95, 2, 21, 0.456, 0.335, 4, -14.083, 0, 0.0344, 0.918, 0.872, 0.217, 0.251, 177.1, 635.7, 4, 1.365], ['Frank Zappa', 'Peaches En Regalia', 1969, 52, 20.821, 1, 22, 0.385, 0.689, 11, -11.616, 0, 0.0294, 0.262, 0.835, 0.0848, 0.777, 101.894, 218.9, 4, 2.094], ['Allman Brothers Band', 'In Memory Of Elizabeth Reed', 1970, 46, 20.699, 2, 23, 0.376, 0.755, 9, -10.266, 0, 0.0327, 0.062, 0.869, 0.057, 0.793, 113.857, 419.1, 4, 1.095], ['Bob Dylan', 'Subterranean Homesick Blues', 1965, 60, 20.585, 1, 24, 0.576, 0.727, 4, -9.973, 0, 0.05, 0.702, 0.0, 0.324, 0.751, 173.854, 141.3, 4, 2.568], ['Creedence Clearwater Revival', 'Ramble Tamble', 1970, 46, 20.477, 2, 25, 0.387, 0.804, 7, -7.75, 1, 0.028, 0.00619, 0.713, 0.0889, 0.763, 104.064, 431.2, 4, 2.943], ['Jethro Tull', 'We Used to Know', 1969, 52, 20.374, 1, 26, 0.247, 0.458, 4, -10.509, 0, 0.0322, 0.105, 3.33e-05, 0.283, 0.465, 171.923, 243.4, 3, 2.391], ['John Paul Jones', 'Leafy Meadows', 2001, 28, 20.277, 5, 27, 0.479, 0.909, 2, -7.404, 1, 0.0716, 9.07e-05, 0.758, 0.634, 0.278, 111.892, 310.5, 4, 2.268], ["Jasper van't Hofs Pili Pili", 'Pili Pili', 1984, 29, 20.185, 3, 28, 0.619, 0.717, 1, -11.773, 1, 0.045, 0.215, 0.832, 0.0767, 0.766, 169.659, 944.1, 4, 1.699], ['Jimi Hendrix', 'All Along the Watchtower', 1968, 77, 20.097, 1, 29, 0.438, 0.805, 8, -6.237, 1, 0.0624, 0.00255, 5.69e-05, 0.0842, 0.564, 113.253, 240.8, 4, 1.283], ['Creedence Clearwater Revival', 'I Heard It Through The Grapevine', 1970, 52, 20.013, 2, 30, 0.646, 0.762, 9, -9.986, 0, 0.0477, 0.15, 0.0798, 0.0866, 0.887, 118.806, 667.4, 4, 2.789], ['Kaleidoscope', 'Egyptian Garden', 1967, 24, 19.932, 1, 31, 0.394, 0.826, 7, -7.427, 1, 0.0405, 0.258, 4.97e-05, 0.103, 0.746, 138.573, 186.3, 4, 3.096], ['The Rolling Stones', "Sittin' On A Fence", 1967, 33, 19.855, 1, 32, 0.631, 0.455, 1, -9.942, 1, 0.0251, 0.243, 6.51e-05, 0.141, 0.631, 101.881, 182.9, 4, 3.576], ['Cream', 'White Room', 1968, 72, 19.782, 1, 33, 0.553, 0.576, 0, -13.458, 1, 0.0304, 0.191, 0.00664, 0.0365, 0.457, 109.827, 298.3, 4, 3.169], ['Tangerine Dream', 'Choronzon', 1985, 27, 19.711, 3, 34, 0.409, 0.628, 2, -16.174, 1, 0.0436, 0.165, 0.784, 0.0805, 0.823, 198.136, 248.9, 4, 2.428], ['Rush', 'La Villa Strangiato', 1978, 52, 19.643, 2, 35, 0.366, 0.606, 0, -10.274, 1, 0.0371, 0.000994, 0.58, 0.0762, 0.137, 143.183, 574.7, 4, 2.924], ['The Rolling Stones', 'Gimme Shelter', 1969, 79, 19.577, 1, 36, 0.634, 0.63, 1, -8.277, 0, 0.031, 0.447, 0.039, 0.17, 0.489, 118.628, 270.8, 4, 2.722], ['Love', 'Alone Again Or', 1967, 54, 19.514, 1, 37, 0.318, 0.303, 11, -15.572, 0, 0.0302, 0.664, 0.000223, 0.113, 0.226, 174.254, 197.3, 4, 3.608], ['Tangerine Dream', 'Betrayal (Sorcerer Theme)', 1977, 30, 19.453, 2, 38, 0.391, 0.141, 0, -20.1, 1, 0.036, 0.816, 0.902, 0.0776, 0.181, 148.062, 224.0, 4, 2.382], ['Keith Richards', 'Wicked As It Seems', 1988, 36, 19.395, 3, 39, 0.689, 0.62, 7, -10.601, 1, 0.0337, 0.286, 1.7e-06, 0.0368, 0.962, 110.859, 285.3, 4, 2.239], ['The Rolling Stones', 'Street Fighting Man', 1968, 58, 19.338, 1, 40, 0.583, 0.855, 0, -7.213, 1, 0.0333, 0.1, 0.0177, 0.262, 0.69, 128.178, 195.1, 4, 1.536], ['Creedence Clearwater Revival', 'Run Through The Jungle', 1970, 72, 19.283, 2, 41, 0.638, 0.756, 7, -5.916, 1, 0.0483, 0.0157, 0.176, 0.0958, 0.837, 136.557, 185.1, 4, 1.365], ['Pink Floyd', 'Fearless', 1971, 52, 19.23, 2, 42, 0.315, 0.281, 7, -18.534, 1, 0.0471, 0.193, 0.0525, 0.314, 0.179, 70.094, 367.9, 4, 1.643], ['Spirit', 'Fresh-Garbage', 1968, 33, 19.179, 1, 43, 0.465, 0.357, 2, -13.532, 1, 0.0343, 0.487, 0.0121, 0.155, 0.582, 130.74, 191.0, 4, 1.289], ['The Rolling Stones', 'Have You Seen Your Mother, Baby, Standing In The Shadow?', 1966, 39, 19.129, 1, 44, 0.373, 0.834, 7, -5.49, 1, 0.0366, 0.283, 0.769, 0.235, 0.486, 100.54, 154.0, 4, 3.061], ['The Byrds', 'Mr. Spaceman', 1966, 48, 19.08, 1, 45, 0.584, 0.708, 7, -8.958, 1, 0.0356, 0.268, 0.0, 0.271, 0.927, 107.873, 129.5, 4, 2.691], ['Cream', 'Tales Of Brave Ulysses', 1967, 58, 19.033, 1, 46, 0.538, 0.476, 0, -9.215, 0, 0.049, 0.0178, 4.26e-05, 0.101, 0.188, 105.642, 166.5, 4, 2.169], ['Camel', 'Rhayader Goes To Town', 1975, 36, 18.988, 2, 47, 0.373, 0.423, 0, -12.577, 0, 0.0358, 0.253, 0.527, 0.141, 0.425, 120.941, 320.4, 4, 1.962], ['Tangerine Dream', 'Cinnamon Road', 1983, 20, 18.943, 3, 48, 0.551, 0.747, 8, -9.016, 1, 0.0296, 0.565, 0.916, 0.131, 0.542, 107.632, 238.9, 4, 2.174], ['Rush', 'Leave That Thing Alone', 1993, 24, 18.9, 4, 49, 0.478, 0.942, 9, -7.762, 0, 0.0391, 4.19e-05, 0.873, 0.313, 0.747, 120.008, 246.1, 4, 3.264], ['Fleetwood Mac', 'Emerald Eyes', 1973, 57, 18.858, 2, 50, 0.567, 0.421, 6, -15.754, 0, 0.0301, 0.383, 0.011, 0.266, 0.618, 73.563, 215.0, 4, 2.443], ['The Rolling Stones', 'Sympathy For The Devil', 1968, 76, 18.817, 1, 51, 0.702, 0.668, 9, -9.237, 1, 0.214, 0.518, 0.0, 0.0588, 0.561, 116.063, 378.1, 4, 1.033], ['T.Rex', 'Jeepster', 1971, 53, 18.777, 2, 52, 0.394, 0.863, 9, -6.239, 1, 0.101, 0.0157, 0.0116, 0.0609, 0.907, 193.552, 247.8, 4, 2.428], ['Ten Years After', "I'd Love to Change the World", 1971, 67, 18.738, 2, 53, 0.383, 0.516, 9, -12.032, 0, 0.0344, 0.202, 0.193, 0.114, 0.371, 118.144, 224.1, 4, 1.587], ['The Beatles', 'Tomorrow Never Knows', 1966, 57, 18.7, 1, 54, 0.38, 0.829, 5, -6.105, 1, 0.0405, 8.4e-05, 0.00208, 0.342, 0.0534, 125.887, 179.547, 4, 2.845], ['The Rolling Stones', 'Sway', 1971, 52, 18.663, 2, 55, 0.33, 0.895, 5, -3.435, 1, 0.0399, 0.221, 0.737, 0.408, 0.54, 144.945, 232.533, 4, 3.231], ['Grateful Dead', 'Estimated Prophet', 1977, 47, 18.627, 2, 56, 0.655, 0.398, 11, -13.822, 0, 0.051, 0.456, 0.00099, 0.0814, 0.659, 130.722, 336.579, 1, 1.079], ['Premiata Forneria Marconi', 'Celebration', 1973, 25, 18.592, 2, 57, 0.267, 0.617, 2, -16.299, 1, 0.0563, 0.0258, 0.173, 0.216, 0.208, 145.245, 233.000, 4, 2.057], ['The Beatles', 'While My Guitar Gently Weeps', 1968, 73, 18.557, 1, 58, 0.453, 0.654, 4, -8.855, 0, 0.0317, 0.0205, 0.00395, 0.172, 0.702, 115.0, 285.000, 4, 1.567], ['Steely Dan', "Don't Take Me Alive", 1976, 57, 18.523, 2, 59, 0.617, 0.544, 7, -9.529, 0, 0.0433, 0.425, 0.000948, 0.34, 0.623, 119.068, 256.360, 4, 3.238], ['Jethro Tull', 'Teacher', 1970, 53, 18.49, 2, 60, 0.65, 0.76, 4, -8.459, 0, 0.0588, 0.2, 4.53e-05, 0.14, 0.71, 122.636, 227.520, 4, 2.153], ['The Rolling Stones', "Mother's Little Helper", 1966, 56, 18.458, 1, 61, 0.582, 0.545, 4, -11.677, 0, 0.0298, 0.017, 4.05e-06, 0.229, 0.721, 101.691, 164.893, 4, 1.646], ['Pink Floyd', 'One of These Days', 1971, 53, 18.426, 2, 62, 0.371, 0.467, 4, -17.199, 1, 0.0465, 0.00421, 0.855, 0.487, 0.394, 103.685, 355.400, 4, 1.671], ['Masayoshi Takanaka', 'トーキョーレギー', 1976, 58, 18.395, 2, 63, 0.498, 0.73, 4, -10.326, 1, 0.0388, 0.076, 0.0579, 0.0712, 0.724, 131.019, 260.333, 4, 1.552], ['The Mothers Of Invention', 'Hungry Freaks, Daddy', 1966, 37, 18.365, 1, 64, 0.366, 0.515, 9, -11.451, 1, 0.0335, 0.106, 0.0, 0.152, 0.628, 142.493, 210.467, 4, 1.934], ['Jean-Luc Ponty', 'Cosmic Messenger', 1978, 39, 18.335, 2, 65, 0.249, 0.82, 7, -8.284, 0, 0.0494, 0.132, 0.818, 0.153, 0.219, 151.79, 282.133, 4, 2.398], ['Jethro Tull', 'Aqualung', 1971, 62, 18.306, 2, 66, 0.477, 0.479, 7, -11.887, 0, 0.0483, 0.0649, 0.029, 0.0906, 0.662, 122.531, 396.187, 4, 2.29], ['Fleetwood Mac', 'The Ghost', 1972, 28, 18.278, 2, 67, 0.631, 0.619, 11, -15.582, 0, 0.0288, 0.675, 0.322, 0.127, 0.955, 132.035, 242.173, 4, 1.318], ['Arlo Guthrie', 'St. James Infirmary - Live', 2005, 25, 18.25, 5, 68, 0.583, 0.498, 11, -13.083, 0, 0.0598, 0.789, 0.000155, 0.722, 0.488, 108.692, 239.627, 4, 1.27], ['The Rolling Stones', 'Moonlight Mile', 1971, 52, 18.222, 2, 69, 0.417, 0.5, 7, -6.449, 1, 0.0263, 0.575, 0.0883, 0.102, 0.241, 130.531, 357.200, 4, 1.969], ['Mahavishnu Orchestra', 'Miles Beyond', 1971, 17, 18.195, 2, 70, 0.391, 0.587, 0, -13.481, 1, 0.0667, 0.216, 0.886, 0.0793, 0.578, 86.178, 280.107, 3, 3.238], ['Pearl Jam', 'Corduroy', 1994, 56, 18.169, 4, 71, 0.487, 0.93, 0, -7.3, 1, 0.0632, 0.00241, 2.82e-05, 0.0841, 0.134, 131.304, 277.587, 4, 1.693], ['Premiata Forneria Marconi', 'Generale', 1972, 26, 18.143, 2, 72, 0.416, 0.474, 0, -17.403, 1, 0.0608, 0.00667, 0.622, 0.103, 0.487, 109.679, 258.000, 4, 2.309], ['The Rolling Stones', 'Mess It Up', 2023, 69, 18.117, 6, 73, 0.64, 0.982, 11, -3.368, 0, 0.0517, 0.000368, 2.1e-06, 0.0767, 0.769, 123.016, 243.687, 4, 3.032], ['The Yardbirds', 'White Summer', 1967, 38, 18.092, 1, 74, 0.448, 0.542, 4, -13.774, 0, 0.0672, 0.183, 0.786, 0.106, 0.319, 143.792, 236.467, 4, 2.94], ['Fleetwood Mac', 'Jewel Eyed Judy', 1970, 42, 18.068, 2, 75, 0.542, 0.194, 9, -16.503, 1, 0.0308, 0.717, 0.000262, 0.066, 0.381, 90.239, 199.373, 4, 1.246], ['The Doors', 'The Crystal Ship', 1967, 64, 18.043, 1, 76, 0.313, 0.42, 10, -9.806, 1, 0.0303, 0.797, 2.35e-06, 0.126, 0.339, 178.711, 152.000, 4, 1.857], ['Mike Bloomfield, Al Kooper', 'Stop', 1968, 40, 18.02, 1, 77, 0.477, 0.607, 9, -8.33, 1, 0.0471, 0.256, 0.146, 0.107, 0.64, 87.301, 258.800, 4, 2.658], ['George Harrison', 'Wah-Wah', 1970, 51, 17.996, 2, 78, 0.358, 0.893, 9, -5.948, 1, 0.0339, 0.00153, 0.152, 0.272, 0.591, 96.388, 337.750, 4, 1.673], ['Crosby, Stills, Nash & Young', 'Carry On', 1970, 59, 17.973, 2, 79, 0.463, 0.496, 1, -12.203, 1, 0.041, 0.059, 1.24e-06, 0.271, 0.533, 118.505, 265.933, 4, 1.515], ['The Doors', 'Peace Frog', 1970, 68, 17.951, 2, 80, 0.665, 0.621, 7, -11.166, 1, 0.0385, 0.141, 0.0031, 0.307, 0.7, 111.488, 171.689, 4, 3.69], ['Fleetwood Mac', 'Never Going Back Again', 1977, 77, 17.928, 2, 81, 0.654, 0.336, 6, -12.825, 1, 0.0379, 0.858, 0.385, 0.0786, 0.947, 176.083, 134.400, 4, 2.692], ['The Beatles', 'Norwegian Wood (This Bird Has Flown)', 1965, 74, 17.906, 1, 82, 0.425, 0.369, 4, -11.876, 1, 0.0379, 0.183, 0.00126, 0.112, 0.65, 176.625, 124.693, 3, 1.062], ['Peter Green', 'Slabo Day', 1979, 49, 17.885, 2, 83, 0.86, 0.488, 9, -13.531, 0, 0.0347, 0.0534, 0.834, 0.103, 0.782, 96.093, 309.160, 4, 1.422], ['Tom Petty and the Heartbreakers', "Mary Jane's Last Dance", 1993, 76, 17.864, 4, 84, 0.464, 0.655, 7, -9.058, 0, 0.0608, 0.0272, 1.34e-06, 0.328, 0.531, 169.515, 273.600, 4, 2.261], ['Fleetwood Mac', 'Child of Mine', 1972, 28, 17.843, 2, 85, 0.482, 0.649, 4, -13.424, 1, 0.0298, 0.223, 0.145, 0.294, 0.717, 143.13, 327.867, 4, 3.075], ['The Rolling Stones', 'Jiving Sister Fanny', 1969, 28, 17.822, 1, 86, 0.709, 0.68, 7, -6.634, 1, 0.0306, 0.315, 0.16, 0.141, 0.965, 109.909, 203.600, 4, 2.105], ['Ultimate Spinach', 'Mind Flowers', 1968, 41, 17.802, 1, 87, 0.255, 0.427, 2, -10.235, 0, 0.0292, 0.296, 0.459, 0.128, 0.175, 156.947, 580.093, 3, 3.504], ['Rush', 'Animate', 1993, 26, 17.782, 4, 88, 0.514, 0.926, 2, -8.247, 1, 0.0392, 8.78e-05, 0.0236, 0.332, 0.506, 115.946, 364.493, 4, 2.701], ['Pearl Jam', 'Immortality', 1994, 56, 17.762, 4, 89, 0.633, 0.543, 2, -9.142, 1, 0.0296, 0.0798, 0.00671, 0.0964, 0.118, 129.089, 318.067, 4, 1.977], ['The Rolling Stones', 'Can I Get A Witness', 1964, 33, 17.743, 1, 90, 0.79, 0.774, 7, -7.961, 1, 0.072, 0.371, 0.0, 0.0669, 0.835, 97.035, 176.080, 4, 2.885], ['Ultimate Spinach', 'Sacrifice of the Moon', 1968, 23, 17.723, 1, 91, 0.253, 0.293, 9, -9.867, 0, 0.0358, 0.301, 0.0318, 0.0986, 0.186, 178.324, 225.640, 3, 3.112], ['Rush', 'Subdivisions', 1982, 56, 17.705, 3, 92, 0.513, 0.841, 11, -9.272, 0, 0.0364, 0.0468, 0.0425, 0.12, 0.457, 133.266, 334.000, 3, 2.976], ['Aerosmith', 'Sweet Emotion', 1975, 77, 17.686, 2, 93, 0.379, 0.76, 9, -10.961, 1, 0.0378, 0.00298, 0.0296, 0.104, 0.491, 99.436, 274.088, 4, 1.74], ['Jethro Tull', 'Cross-Eyed Mary', 1971, 54, 17.668, 2, 94, 0.575, 0.696, 0, -10.01, 1, 0.12, 0.179, 0.00114, 0.315, 0.646, 86.304, 250.200, 4, 3.052], ['Pink Floyd', 'San Tropez', 1971, 52, 17.65, 2, 95, 0.689, 0.258, 7, -19.199, 1, 0.0489, 0.169, 0.0103, 0.07, 0.581, 120.905, 222.853, 4, 3.027], ['Frank Zappa', "Apostrophe'", 1974, 43, 17.632, 2, 96, 0.28, 0.879, 9, -9.214, 1, 0.0793, 0.303, 0.821, 0.338, 0.568, 171.12, 349.787, 4, 3.63], ['Captain Beefheart & His Magic Band', 'Her Eyes Are a Blue Million Miles', 1972, 48, 17.614, 2, 97, 0.786, 0.357, 4, -15.838, 0, 0.0472, 0.416, 0.00119, 0.0756, 0.712, 88.969, 177.507, 4, 1.114], ['Grateful Dead', 'Dark Star - Single Version', 1968, 39, 17.597, 1, 98, 0.434, 0.16, 2, -13.856, 1, 0.0346, 0.906, 0.244, 0.172, 0.376, 95.525, 163.280, 4, 2.613], ['Chris Squire', 'Lucky Seven', 1975, 41, 17.579, 2, 99, 0.664, 0.509, 4, -8.148, 0, 0.0415, 0.647, 0.0948, 0.0742, 0.618, 78.456, 414.200, 3, 2.702], ['Crosby, Stills, Nash & Young', 'Ohio', 1970, 33, 17.562, 2, 100, 0.328, 0.682, 0, -11.844, 1, 0.0623, 0.483, 0.0, 0.407, 0.727, 155.738, 264.667, 4, 2.744]]