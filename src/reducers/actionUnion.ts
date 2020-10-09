/** This type is used for merging All actions of the same type
 * Example:
 * type RegistrationAction =
 *  | RegistrationRequest
 *  | RegistrationSuccess
 *  | RegistrationError;
 */
export type ActionUnion<A extends { [K in keyof A]: A[K] }> = ReturnType<
  A[keyof A]
>;