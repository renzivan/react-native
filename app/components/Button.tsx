import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  bgColor?: string;
  customStyle?: Object;
  text: string;
  textColor?: string;
  onPress: () => void;
}

const DEFAULT_BG_COLOR = '#2196f3'
const DEFAULT_TEXT_COLOR = '#fff'
const DEFAULT_CUSTOM_STYLE = {
  alignItems: 'center',
  alignSelf: 'stretch',
  borderRadius: 100,
  height: 40,
  justifyContent: 'center'
}

export default function App({
  bgColor = DEFAULT_BG_COLOR,
  customStyle = {},
  textColor = DEFAULT_TEXT_COLOR,
  text,
  onPress,
}: Props) {
  const mergedStyle = { ...DEFAULT_CUSTOM_STYLE, ...customStyle } as any;

  return (
    <Pressable style={[mergedStyle, { backgroundColor: bgColor }]} onPress={onPress}>
      <Text style={{ color: textColor }}>{text}</Text>
    </Pressable>
  );
}
