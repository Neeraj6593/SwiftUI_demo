# SwiftUI Demo with SignUp, Login, ListView, and YouTube Integration

This SwiftUI demo project showcases a simple iOS app with user authentication features (SignUp and Login), a dynamic ListView displaying YouTube's top videos, and a YouTube player for playing selected videos. This README will guide you through setting up and running the project.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features](#features)
  - [SignUp and Login](#signup-and-login)
  - [ListView with YouTube's Top Videos](#listview-with-youtubes-top-videos)
  - [YouTube Video Player](#youtube-video-player)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

To run this demo project, you need:

1. Xcode installed on your Mac.
2. An iOS Simulator or a physical iOS device for testing.

### Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/yourusername/SwiftUI_demo.git
   ```

2. Open the project in Xcode:

   ```shell
   cd SwiftUI_demo
   open OTTDemo-SwiftUI.xcodeproj
   ```

3. Build and run the project on the iOS Simulator or your iOS device.

## Features

### SignUp and Login

The app allows users to create an account (SignUp) or log in if they already have one. The user authentication system is implemented using Firebase Authentication for simplicity.

### ListView with YouTube's Top Videos

Once logged in, users can access a ListView displaying YouTube's top videos. The video data is fetched from the YouTube API and displayed in a scrollable list. Each list item contains the video's title, thumbnail, and other relevant information.

### YouTube Video Player

Users can tap on a video from the ListView to open a YouTube video player, where they can watch the selected video. The video player uses the YouTube iFrame Player API for seamless playback.

## Usage

1. Launch the app on your iOS device or simulator.
2. Sign up for a new account or log in if you already have one.
3. Explore the ListView to see YouTube's top videos.
4. Select a video from the list to play it in the YouTube video player.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for checking out our SwiftUI demo project! If you have any questions or feedback, please feel free to open an issue or contact us. We hope you find this project helpful and inspiring for your SwiftUI development journey.
