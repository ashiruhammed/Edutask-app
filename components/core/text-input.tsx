import { Feather } from '@expo/vector-icons';
import { Input as BaseInput, InputProps } from '@rneui/base';
import * as React from 'react';
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { AppText, AppTextProps } from './text';

export type AppTextInputProps = InputProps & {
  // other props
  isLast?: boolean;
  isPassword?: boolean;
};

export function AppTextInput({ isLast, isPassword, ...props }: AppTextInputProps) {
  const { colors, typography } = useStyles().theme;

  const inputRef = React.createRef<BaseInput & TextInput>();

  const [isFocused, setIsFocused] = React.useState(false);
  const [hideSecureInput, setHideSecureInput] = React.useState<boolean>(
    props.secureTextEntry || isPassword || false
  );

  const handleFocus = React.useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (props.onFocus) props.onFocus(e);
      setIsFocused(true);
    },
    [props.onFocus]
  );

  const handleBlur = React.useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (props.onBlur) props.onBlur(e);
      setIsFocused(false);
    },
    [props.onBlur]
  );

  return (
    <BaseInput
      //breaker
      {...props}
      ref={(ref: any) => {
        if (props.inputRef) props.inputRef(ref);
        inputRef.current = ref as BaseInput & TextInput;
      }}
      secureTextEntry={hideSecureInput}
      rightIcon={
        props.rightIcon || isPassword ? (
          <>
            {props.rightIcon ? (
              props.rightIcon
            ) : (
              <Feather
                onPress={() => setHideSecureInput(!hideSecureInput)}
                name={hideSecureInput ? 'eye-off' : 'eye'}
                size={20}
                color="#9E9E9E"
                style={{ paddingHorizontal: 8 }}
              />
            )}
          </>
        ) : (
          props.rightIcon
        )
      }
      placeholderTextColor={props.placeholderTextColor || colors.grey[500]}
      selectionColor={
        props.selectionColor || (props.errorMessage ? colors.error[500] : colors.primary[900])
      }
      onFocus={handleFocus}
      onBlur={handleBlur}
      containerStyle={[
        {
          // other default styles
          paddingHorizontal: 0,
        },
        props.containerStyle,
      ]}
      labelStyle={[
        {
          ...typography.regular,
          fontWeight: '400',
          color: colors.white,
          marginBottom: 8,
          fontSize: 14,
        },
        props.labelStyle,
      ]}
      inputStyle={[
        {
          height: 56,
          paddingHorizontal: 16,
        },
        props.inputStyle,
      ]}
      style={[
        {
          ...typography.regular,
          lineHeight: 16,

          color: props.errorMessage ? colors.error[500] : isFocused ? colors.white : colors.white,
          fontSize: 12,
        },
        props.style,
      ]}
      inputContainerStyle={[
        {
          // other default styles
          borderColor: props.errorMessage
            ? colors.error[500]
            : isFocused
              ? colors.grey[500]
              : colors.grey[500],
          borderWidth: 1,
          borderRadius: 8,
          maxHeight: props.multiline ? undefined : 54,
        },
        props.inputContainerStyle,
      ]}
      errorStyle={[
        {
          // other default styles
          ...typography.regular,
          color: colors.error[500],
          margin: 0,
          marginTop: 8,
        },
        props.errorStyle,
      ]}
      ErrorComponent={({ children, ...props }: AppTextProps) => {
        if (!children) return null;
        return <AppText {...props}>{children}</AppText>;
      }}
    />
  );
}
