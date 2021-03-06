//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** An empty `class` that can be used as a type for all `class`es. */
interface Class {} //TODO: What use is this, really?

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** All of the `null`ish types in one. */
type nil = null|undefined; // void|never

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** All of the possible index types in one. */
type index = string|number|symbol;

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** An `object` with unknown members of a given or `unknown` type. */
type table<
    ValueType = unknown,
    KeyType extends index = index,
> = object & {
    [key in KeyType]?: ValueType|null;
};
