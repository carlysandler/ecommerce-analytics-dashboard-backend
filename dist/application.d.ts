import { ApplicationConfig } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
declare const EcommerceAnalyticsDashboardBackendApplication_base: (new (...args: any[]) => {
    projectRoot: string;
    bootOptions?: import("@loopback/boot").BootOptions | undefined;
    booted: boolean;
    start(): Promise<void>;
    boot(): Promise<void>;
    booters(...booterCls: import("@loopback/core").Constructor<import("@loopback/boot").Booter>[]): import("@loopback/boot").Binding<any>[];
    applicationBooter(subApp: import("@loopback/core").Application & import("@loopback/boot").Bootable, filter?: import("@loopback/core").BindingFilter | undefined): import("@loopback/boot").Binding<import("@loopback/boot").Booter>;
    component<C extends import("@loopback/core").Component = import("@loopback/core").Component>(componentCtor: import("@loopback/core").Constructor<C>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined): import("@loopback/boot").Binding<C>;
    mountComponentBooters(componentInstanceOrClass: import("@loopback/core").Constructor<unknown> | import("@loopback/boot").InstanceWithBooters): void;
    readonly options: ApplicationConfig;
    readonly state: string;
    controller: <T>(controllerCtor: import("@loopback/core").ControllerClass<T>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T>;
    server: <T_1 extends import("@loopback/core").Server>(ctor: import("@loopback/core").Constructor<T_1>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_1>;
    servers: <T_2 extends import("@loopback/core").Server>(ctors: import("@loopback/core").Constructor<T_2>[]) => import("@loopback/boot").Binding<any>[];
    getServer: <T_3 extends import("@loopback/core").Server>(target: string | import("@loopback/core").Constructor<T_3>) => Promise<T_3>;
    init: () => Promise<void>;
    onInit: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    onStart: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    stop: () => Promise<void>;
    onStop: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    setMetadata: (metadata: import("@loopback/core").ApplicationMetadata) => void;
    lifeCycleObserver: <T_4 extends import("@loopback/core").LifeCycleObserver>(ctor: import("@loopback/core").Constructor<T_4>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_4>;
    service: <S>(cls: import("@loopback/core").ServiceOrProviderClass<S>, nameOrOptions?: string | import("@loopback/core").ServiceOptions | undefined) => import("@loopback/boot").Binding<S>;
    interceptor: (interceptor: import("@loopback/core").Interceptor | import("@loopback/core").Constructor<import("@loopback/core").Provider<import("@loopback/core").Interceptor>>, nameOrOptions?: string | import("@loopback/core").InterceptorBindingOptions | undefined) => import("@loopback/boot").Binding<import("@loopback/core").Interceptor>;
    readonly name: string;
    readonly subscriptionManager: import("@loopback/core").ContextSubscriptionManager;
    scope: import("@loopback/core").BindingScope;
    readonly parent: import("@loopback/core").Context | undefined;
    emitEvent: <T_5 extends import("@loopback/core").ContextEvent>(type: string, event: T_5) => void;
    emitError: (err: unknown) => void;
    bind: <ValueType = any>(key: import("@loopback/core").BindingAddress<ValueType>) => import("@loopback/boot").Binding<ValueType>;
    add: (binding: import("@loopback/boot").Binding<unknown>) => import("@loopback/core").Application;
    configure: <ConfigValueType = any>(key?: import("@loopback/core").BindingAddress<unknown> | undefined) => import("@loopback/boot").Binding<ConfigValueType>;
    getConfigAsValueOrPromise: <ConfigValueType_1>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => import("@loopback/core").ValueOrPromise<ConfigValueType_1 | undefined>;
    getConfig: <ConfigValueType_2>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => Promise<ConfigValueType_2 | undefined>;
    getConfigSync: <ConfigValueType_3>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => ConfigValueType_3 | undefined;
    unbind: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    subscribe: (observer: import("@loopback/core").ContextEventObserver) => import("@loopback/core").Subscription;
    unsubscribe: (observer: import("@loopback/core").ContextEventObserver) => boolean;
    close: () => void;
    isSubscribed: (observer: import("@loopback/core").ContextObserver) => boolean;
    createView: <T_6 = unknown>(filter: import("@loopback/core").BindingFilter, comparator?: import("@loopback/core").BindingComparator | undefined, options?: Omit<import("@loopback/core").ResolutionOptions, "session"> | undefined) => import("@loopback/core").ContextView<T_6>;
    contains: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    isBound: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    getOwnerContext: (keyOrBinding: import("@loopback/core").BindingAddress<unknown> | Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
    getScopedContext: (scope: import("@loopback/core").BindingScope.APPLICATION | import("@loopback/core").BindingScope.SERVER | import("@loopback/core").BindingScope.REQUEST) => import("@loopback/core").Context | undefined;
    getResolutionContext: (binding: Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
    isVisibleTo: (ctx: import("@loopback/core").Context) => boolean;
    find: <ValueType_1 = any>(pattern?: string | RegExp | import("@loopback/core").BindingFilter | undefined) => Readonly<import("@loopback/boot").Binding<ValueType_1>>[];
    findByTag: <ValueType_2 = any>(tagFilter: RegExp | import("@loopback/core").BindingTag) => Readonly<import("@loopback/boot").Binding<ValueType_2>>[];
    get: {
        <ValueType_3>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_3>, session?: import("@loopback/core").ResolutionSession | undefined): Promise<ValueType_3>;
        <ValueType_4>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_4>, options: import("@loopback/core").ResolutionOptions): Promise<ValueType_4 | undefined>;
    };
    getSync: {
        <ValueType_5>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_5>, session?: import("@loopback/core").ResolutionSession | undefined): ValueType_5;
        <ValueType_6>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_6>, options?: import("@loopback/core").ResolutionOptions | undefined): ValueType_6 | undefined;
    };
    getBinding: {
        <ValueType_7 = any>(key: import("@loopback/core").BindingAddress<ValueType_7>): import("@loopback/boot").Binding<ValueType_7>;
        <ValueType_8>(key: import("@loopback/core").BindingAddress<ValueType_8>, options?: {
            optional?: boolean | undefined;
        } | undefined): import("@loopback/boot").Binding<ValueType_8> | undefined;
    };
    findOrCreateBinding: <T_7>(key: import("@loopback/core").BindingAddress<T_7>, policy?: import("@loopback/core").BindingCreationPolicy | undefined) => import("@loopback/boot").Binding<T_7>;
    getValueOrPromise: <ValueType_9>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_9>, optionsOrSession?: import("@loopback/core").ResolutionOptionsOrSession | undefined) => import("@loopback/core").ValueOrPromise<ValueType_9 | undefined>;
    toJSON: () => import("@loopback/core").JSONObject;
    inspect: (options?: import("@loopback/core").ContextInspectOptions | undefined) => import("@loopback/core").JSONObject;
    on: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    once: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    addListener: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeListener: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    off: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeAllListeners: (event?: string | symbol | undefined) => import("@loopback/core").Application;
    setMaxListeners: (n: number) => import("@loopback/core").Application;
    getMaxListeners: () => number;
    listeners: (eventName: string | symbol) => Function[];
    rawListeners: (eventName: string | symbol) => Function[];
    emit: (eventName: string | symbol, ...args: any[]) => boolean;
    listenerCount: (eventName: string | symbol) => number;
    prependListener: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    prependOnceListener: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    eventNames: () => (string | symbol)[];
}) & (new (...args: any[]) => {
    serviceProvider<S_1>(provider: import("@loopback/core").Constructor<import("@loopback/core").Provider<S_1>>, nameOrOptions?: string | import("@loopback/core").ServiceOptions | undefined): import("@loopback/boot").Binding<S_1>;
    component<C_1 extends import("@loopback/core").Component = import("@loopback/core").Component>(componentCtor: import("@loopback/core").Constructor<C_1>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined): import("@loopback/boot").Binding<C_1>;
    mountComponentServices<C_1 extends import("@loopback/core").Component = import("@loopback/core").Component>(component: import("@loopback/core").Constructor<C_1>, componentBindingKey?: import("@loopback/core").BindingAddress<C_1> | undefined): void;
    readonly options: ApplicationConfig;
    readonly state: string;
    controller: <T_8>(controllerCtor: import("@loopback/core").ControllerClass<T_8>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_8>;
    server: <T_1_1 extends import("@loopback/core").Server>(ctor: import("@loopback/core").Constructor<T_1_1>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_1_1>;
    servers: <T_2_1 extends import("@loopback/core").Server>(ctors: import("@loopback/core").Constructor<T_2_1>[]) => import("@loopback/boot").Binding<any>[];
    getServer: <T_3_1 extends import("@loopback/core").Server>(target: string | import("@loopback/core").Constructor<T_3_1>) => Promise<T_3_1>;
    init: () => Promise<void>;
    onInit: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    start: () => Promise<void>;
    onStart: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    stop: () => Promise<void>;
    onStop: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    setMetadata: (metadata: import("@loopback/core").ApplicationMetadata) => void;
    lifeCycleObserver: <T_4_1 extends import("@loopback/core").LifeCycleObserver>(ctor: import("@loopback/core").Constructor<T_4_1>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_4_1>;
    service: <S_1>(cls: import("@loopback/core").ServiceOrProviderClass<S_1>, nameOrOptions?: string | import("@loopback/core").ServiceOptions | undefined) => import("@loopback/boot").Binding<S_1>;
    interceptor: (interceptor: import("@loopback/core").Interceptor | import("@loopback/core").Constructor<import("@loopback/core").Provider<import("@loopback/core").Interceptor>>, nameOrOptions?: string | import("@loopback/core").InterceptorBindingOptions | undefined) => import("@loopback/boot").Binding<import("@loopback/core").Interceptor>;
    readonly name: string;
    readonly subscriptionManager: import("@loopback/core").ContextSubscriptionManager;
    scope: import("@loopback/core").BindingScope;
    readonly parent: import("@loopback/core").Context | undefined;
    emitEvent: <T_5_1 extends import("@loopback/core").ContextEvent>(type: string, event: T_5_1) => void;
    emitError: (err: unknown) => void;
    bind: <ValueType_10 = any>(key: import("@loopback/core").BindingAddress<ValueType_10>) => import("@loopback/boot").Binding<ValueType_10>;
    add: (binding: import("@loopback/boot").Binding<unknown>) => import("@loopback/core").Application;
    configure: <ConfigValueType_4 = any>(key?: import("@loopback/core").BindingAddress | undefined) => import("@loopback/boot").Binding<ConfigValueType_4>;
    getConfigAsValueOrPromise: <ConfigValueType_1_1>(key: import("@loopback/core").BindingAddress, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => import("@loopback/core").ValueOrPromise<ConfigValueType_1_1 | undefined>;
    getConfig: <ConfigValueType_2_1>(key: import("@loopback/core").BindingAddress, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => Promise<ConfigValueType_2_1 | undefined>;
    getConfigSync: <ConfigValueType_3_1>(key: import("@loopback/core").BindingAddress, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => ConfigValueType_3_1 | undefined;
    unbind: (key: import("@loopback/core").BindingAddress) => boolean;
    subscribe: (observer: import("@loopback/core").ContextEventObserver) => import("@loopback/core").Subscription;
    unsubscribe: (observer: import("@loopback/core").ContextEventObserver) => boolean;
    close: () => void;
    isSubscribed: (observer: import("@loopback/core").ContextObserver) => boolean;
    createView: <T_6_1 = unknown>(filter: import("@loopback/core").BindingFilter, comparator?: import("@loopback/core").BindingComparator | undefined, options?: Omit<import("@loopback/core").ResolutionOptions, "session"> | undefined) => import("@loopback/core").ContextView<T_6_1>;
    contains: (key: import("@loopback/core").BindingAddress) => boolean;
    isBound: (key: import("@loopback/core").BindingAddress) => boolean;
    getOwnerContext: (keyOrBinding: import("@loopback/core").BindingAddress | Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
    getScopedContext: (scope: import("@loopback/core").BindingScope.APPLICATION | import("@loopback/core").BindingScope.SERVER | import("@loopback/core").BindingScope.REQUEST) => import("@loopback/core").Context | undefined;
    getResolutionContext: (binding: Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
    isVisibleTo: (ctx: import("@loopback/core").Context) => boolean;
    find: <ValueType_1_1 = any>(pattern?: string | RegExp | import("@loopback/core").BindingFilter | undefined) => Readonly<import("@loopback/boot").Binding<ValueType_1_1>>[];
    findByTag: <ValueType_2_1 = any>(tagFilter: RegExp | import("@loopback/core").BindingTag) => Readonly<import("@loopback/boot").Binding<ValueType_2_1>>[];
    get: {
        <ValueType_3_1>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_3_1>, session?: import("@loopback/core").ResolutionSession | undefined): Promise<ValueType_3_1>;
        <ValueType_4_1>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_4_1>, options: import("@loopback/core").ResolutionOptions): Promise<ValueType_4_1 | undefined>;
    };
    getSync: {
        <ValueType_5_1>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_5_1>, session?: import("@loopback/core").ResolutionSession | undefined): ValueType_5_1;
        <ValueType_6_1>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_6_1>, options?: import("@loopback/core").ResolutionOptions | undefined): ValueType_6_1 | undefined;
    };
    getBinding: {
        <ValueType_7_1 = any>(key: import("@loopback/core").BindingAddress<ValueType_7_1>): import("@loopback/boot").Binding<ValueType_7_1>;
        <ValueType_8_1>(key: import("@loopback/core").BindingAddress<ValueType_8_1>, options?: {
            optional?: boolean | undefined;
        } | undefined): import("@loopback/boot").Binding<ValueType_8_1> | undefined;
    };
    findOrCreateBinding: <T_7_1>(key: import("@loopback/core").BindingAddress<T_7_1>, policy?: import("@loopback/core").BindingCreationPolicy | undefined) => import("@loopback/boot").Binding<T_7_1>;
    getValueOrPromise: <ValueType_9_1>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_9_1>, optionsOrSession?: import("@loopback/core").ResolutionOptionsOrSession | undefined) => import("@loopback/core").ValueOrPromise<ValueType_9_1 | undefined>;
    toJSON: () => import("@loopback/core").JSONObject;
    inspect: (options?: import("@loopback/core").ContextInspectOptions | undefined) => import("@loopback/core").JSONObject;
    on: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    once: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    addListener: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeListener: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    off: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeAllListeners: (event?: string | symbol | undefined) => import("@loopback/core").Application;
    setMaxListeners: (n: number) => import("@loopback/core").Application;
    getMaxListeners: () => number;
    listeners: (eventName: string | symbol) => Function[];
    rawListeners: (eventName: string | symbol) => Function[];
    emit: (eventName: string | symbol, ...args: any[]) => boolean;
    listenerCount: (eventName: string | symbol) => number;
    prependListener: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    prependOnceListener: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    eventNames: () => (string | symbol)[];
}) & (new (...args: any[]) => {
    repository<R extends import("@loopback/repository").Repository<any>>(repoClass: import("@loopback/repository").Class<R>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined): import("@loopback/boot").Binding<R>;
    getRepository<R_1 extends import("@loopback/repository").Repository<any>>(repo: import("@loopback/repository").Class<R_1>): Promise<R_1>;
    dataSource<D extends import("@loopback/repository").JugglerDataSource>(dataSource: D | import("@loopback/repository").Class<D>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined): import("@loopback/boot").Binding<D>;
    model<M extends import("@loopback/repository").Class<unknown>>(modelClass: M): import("@loopback/boot").Binding<M>;
    component<C_2 extends import("@loopback/core").Component = import("@loopback/core").Component>(componentCtor: import("@loopback/core").Constructor<C_2>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined): import("@loopback/boot").Binding<C_2>;
    mountComponentRepositories(componentInstanceOrClass: import("@loopback/repository").RepositoryComponent | import("@loopback/repository").Class<unknown>): void;
    mountComponentModels(component: import("@loopback/repository").RepositoryComponent): void;
    migrateSchema(options?: import("@loopback/repository").SchemaMigrationOptions | undefined): Promise<void>;
    readonly options: ApplicationConfig;
    readonly state: string;
    controller: <T_9>(controllerCtor: import("@loopback/core").ControllerClass<T_9>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_9>;
    server: <T_1_2 extends import("@loopback/core").Server>(ctor: import("@loopback/core").Constructor<T_1_2>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_1_2>;
    servers: <T_2_2 extends import("@loopback/core").Server>(ctors: import("@loopback/core").Constructor<T_2_2>[]) => import("@loopback/boot").Binding<any>[];
    getServer: <T_3_2 extends import("@loopback/core").Server>(target: string | import("@loopback/core").Constructor<T_3_2>) => Promise<T_3_2>;
    init: () => Promise<void>;
    onInit: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    start: () => Promise<void>;
    onStart: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    stop: () => Promise<void>;
    onStop: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    setMetadata: (metadata: import("@loopback/core").ApplicationMetadata) => void;
    lifeCycleObserver: <T_4_2 extends import("@loopback/core").LifeCycleObserver>(ctor: import("@loopback/core").Constructor<T_4_2>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_4_2>;
    service: <S_2>(cls: import("@loopback/core").ServiceOrProviderClass<S_2>, nameOrOptions?: string | import("@loopback/core").ServiceOptions | undefined) => import("@loopback/boot").Binding<S_2>;
    interceptor: (interceptor: import("@loopback/core").Interceptor | import("@loopback/core").Constructor<import("@loopback/core").Provider<import("@loopback/core").Interceptor>>, nameOrOptions?: string | import("@loopback/core").InterceptorBindingOptions | undefined) => import("@loopback/boot").Binding<import("@loopback/core").Interceptor>;
    readonly name: string;
    readonly subscriptionManager: import("@loopback/core").ContextSubscriptionManager;
    scope: import("@loopback/core").BindingScope;
    readonly parent: import("@loopback/core").Context | undefined;
    emitEvent: <T_5_2 extends import("@loopback/core").ContextEvent>(type: string, event: T_5_2) => void;
    emitError: (err: unknown) => void;
    bind: <ValueType_11 = any>(key: import("@loopback/core").BindingAddress<ValueType_11>) => import("@loopback/boot").Binding<ValueType_11>;
    add: (binding: import("@loopback/boot").Binding<unknown>) => import("@loopback/core").Application;
    configure: <ConfigValueType_5 = any>(key?: import("@loopback/core").BindingAddress<unknown> | undefined) => import("@loopback/boot").Binding<ConfigValueType_5>;
    getConfigAsValueOrPromise: <ConfigValueType_1_2>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => import("@loopback/core").ValueOrPromise<ConfigValueType_1_2 | undefined>;
    getConfig: <ConfigValueType_2_2>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => Promise<ConfigValueType_2_2 | undefined>;
    getConfigSync: <ConfigValueType_3_2>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => ConfigValueType_3_2 | undefined;
    unbind: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    subscribe: (observer: import("@loopback/core").ContextEventObserver) => import("@loopback/core").Subscription;
    unsubscribe: (observer: import("@loopback/core").ContextEventObserver) => boolean;
    close: () => void;
    isSubscribed: (observer: import("@loopback/core").ContextObserver) => boolean;
    createView: <T_6_2 = unknown>(filter: import("@loopback/core").BindingFilter, comparator?: import("@loopback/core").BindingComparator | undefined, options?: Omit<import("@loopback/core").ResolutionOptions, "session"> | undefined) => import("@loopback/core").ContextView<T_6_2>;
    contains: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    isBound: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    getOwnerContext: (keyOrBinding: import("@loopback/core").BindingAddress<unknown> | Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
    getScopedContext: (scope: import("@loopback/core").BindingScope.APPLICATION | import("@loopback/core").BindingScope.SERVER | import("@loopback/core").BindingScope.REQUEST) => import("@loopback/core").Context | undefined;
    getResolutionContext: (binding: Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
    isVisibleTo: (ctx: import("@loopback/core").Context) => boolean;
    find: <ValueType_1_2 = any>(pattern?: string | RegExp | import("@loopback/core").BindingFilter | undefined) => Readonly<import("@loopback/boot").Binding<ValueType_1_2>>[];
    findByTag: <ValueType_2_2 = any>(tagFilter: RegExp | import("@loopback/core").BindingTag) => Readonly<import("@loopback/boot").Binding<ValueType_2_2>>[];
    get: {
        <ValueType_3_2>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_3_2>, session?: import("@loopback/core").ResolutionSession | undefined): Promise<ValueType_3_2>;
        <ValueType_4_2>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_4_2>, options: import("@loopback/core").ResolutionOptions): Promise<ValueType_4_2 | undefined>;
    };
    getSync: {
        <ValueType_5_2>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_5_2>, session?: import("@loopback/core").ResolutionSession | undefined): ValueType_5_2;
        <ValueType_6_2>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_6_2>, options?: import("@loopback/core").ResolutionOptions | undefined): ValueType_6_2 | undefined;
    };
    getBinding: {
        <ValueType_7_2 = any>(key: import("@loopback/core").BindingAddress<ValueType_7_2>): import("@loopback/boot").Binding<ValueType_7_2>;
        <ValueType_8_2>(key: import("@loopback/core").BindingAddress<ValueType_8_2>, options?: {
            optional?: boolean | undefined;
        } | undefined): import("@loopback/boot").Binding<ValueType_8_2> | undefined;
    };
    findOrCreateBinding: <T_7_2>(key: import("@loopback/core").BindingAddress<T_7_2>, policy?: import("@loopback/core").BindingCreationPolicy | undefined) => import("@loopback/boot").Binding<T_7_2>;
    getValueOrPromise: <ValueType_9_2>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_9_2>, optionsOrSession?: import("@loopback/core").ResolutionOptionsOrSession | undefined) => import("@loopback/core").ValueOrPromise<ValueType_9_2 | undefined>;
    toJSON: () => import("@loopback/core").JSONObject;
    inspect: (options?: import("@loopback/core").ContextInspectOptions | undefined) => import("@loopback/core").JSONObject;
    on: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    once: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    addListener: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeListener: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    off: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeAllListeners: (event?: string | symbol | undefined) => import("@loopback/core").Application;
    setMaxListeners: (n: number) => import("@loopback/core").Application;
    getMaxListeners: () => number;
    listeners: (eventName: string | symbol) => Function[];
    rawListeners: (eventName: string | symbol) => Function[];
    emit: (eventName: string | symbol, ...args: any[]) => boolean;
    listenerCount: (eventName: string | symbol) => number;
    prependListener: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    prependOnceListener: (eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    eventNames: () => (string | symbol)[];
}) & typeof RestApplication;
export declare class EcommerceAnalyticsDashboardBackendApplication extends EcommerceAnalyticsDashboardBackendApplication_base {
    constructor(options?: ApplicationConfig);
}
export {};
